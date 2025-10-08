import React, { useState, useEffect } from 'react';
import './notebook.css';

export function Notebook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState<string[]>([]);
  const [titles, setTitles] = useState<string[]>([]);

  // Load and split content from test.html
  useEffect(() => {
    fetch('./notebook.html')
      .then(response => response.text())
      .then(html => {
        const titleMatches = html.match(/<h1>(.*?)<\/h1>/g) || [];
        const extractedTitles = titleMatches.map(match => 
          match.replace(/<[^>]+>/g, '').trim()
        );
        setTitles(extractedTitles);

        const pageSections = html.split(/<h1>.*?<\/h1>/);
        setPages([...pageSections.filter(section => section.trim())]);
      });
  }, []);

  const handleNextPage = () => {
    if (currentPage < pages.length + 3) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const jumpToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex+2); // +1 because page 0 is cover, page 1 is TOC
  };

  return (
    <div className="notebook-container">
      {currentPage === 0 && (
        <div className="cover" onClick={() => setCurrentPage(1)}>
          <img src="./images/notebook/cover.png" alt="Notebook Cover" />
        </div>
      )}
      {currentPage === 1 && (
        <div className="toc">
          <h1>Content</h1>
          <ul>
            {titles.map((title, index) => (
              <li key={index} onClick={() => jumpToPage(index + 1)}>
                {title}
              </li>
            ))}
          </ul>
        </div>
      )}
      {currentPage > 1 && currentPage <= pages.length + 2 && (
        <div className="page-content">
          {currentPage > 2 && <h2 className='text-xl font-bold'>{titles[currentPage - 3]}</h2>}
          <div dangerouslySetInnerHTML={{ __html: pages[currentPage - 3] }} />
        </div>
      )}
      {currentPage === pages.length + 3 && (
        <div className="back-cover" style={{ backgroundColor: '#C8B8E8' }} />
      )}
      <div className="navigation-buttons">
        <button onClick={handlePrevPage}>Previous Page</button>
        <button onClick={handleNextPage}>Next Page</button>
      </div>
    </div>
  );
};

