import "./App.css";
import { Route, Routes } from "react-router-dom";
import { getPathMapping } from "../../utils";
import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { NotFound } from "../../components/NotFound";
import { Footer } from "../../components/Footer";

const App = () => {
  const pathMapping = getPathMapping();
  const currentPath =
    location.pathname
      .split(`${import.meta.env.VITE_TEAM_YEAR}_${import.meta.env.VITE_TEAM_NAME}`)
      .pop() || "/";

  // Set Page Title
  const title =
    currentPath in pathMapping ? pathMapping[currentPath].title : "Not Found";

  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    document.title = `${title || ""} | ${import.meta.env.VITE_TEAM_NAME} - ${import.meta.env.VITE_TEAM_YEAR}`;
  }, [title]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="flex flex-row min-h-screen bg-white">
      {/* Left Sidebar with Navigation */}
      <div className="w-64 bg-gradient-to-b from-[#8A6CC9] to-[#4C1894] flex flex-col shadow-lg">
        {/* Site Title */}
        <div className="p-4 text-white">
          <h1 className="text-2xl font-bold">{import.meta.env.VITE_TEAM_NAME}</h1>
        </div>
        
        {/* Navigation Menu */}
        <div className="flex-grow">
          <Navbar />
        </div>
        
        {/* Logo at bottom */}
        <div className="p-4 flex justify-center">
          <img src="images/logo.png" className="w-16" alt="logo" />
        </div>
      </div>

      {/* Right Content Area */}
      <div className="flex-grow flex flex-col">
        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            {Object.entries(pathMapping).map(
              ([path, { title, lead, banner, hideBanner, component: Component }]) => (
                <Route
                  key={path}
                  path={path}
                  element={
                    <>
                      {!hideBanner && <Header title={title || ""} lead={lead || ""} banner={banner || ""} /> }
                      <div className={currentPath=='/' ? "" : "container mx-auto px-4 py-6"}>
                        <Component />
                      </div>
                    </>
                  }
                />
              ),
            )}
            <Route
              path="*"
              element={
                <>
                  <Header
                    title="Not Found"
                    lead="The requested URL was not found on this server."
                    banner=""
                  />
                  <div className="container mx-auto px-4 py-6">
                    <NotFound />
                  </div>
                </>
              }
            />
          </Routes>
        </div>
        
        {/* Footer */}
        <Footer />
      </div>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <img src="images/top.png" alt="Scroll to top" className="w-12 h-12 mx-auto" />
        </button>
      )}
    </div>
  );
};

export default App;