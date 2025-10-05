import { useEffect, useRef } from 'react';

export function Home() {
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      imageRefs.current.forEach(img => {
        if (img) {
          const rect = img.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Calculate visibility percentage
          if (rect.top < windowHeight && rect.bottom > 0) {
            // Image is partially or fully in viewport
            const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
            const visibilityPercentage = Math.max(0, Math.min(1, visibleHeight / rect.height));
            img.style.opacity = visibilityPercentage.toString();
          } else if (rect.bottom <= 0) {
            // Image is above viewport
            img.style.opacity = '1';
          } else if (rect.top >= windowHeight) {
            // Image is below viewport
            img.style.opacity = '0';
          }
        }
      });
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="m-h-[100vh] bg-[#4C1894]">
      <section className="w-full relative">
        <img 
          ref={el => imageRefs.current[0] = el} 
          src="images/home/1.webp" 
          className="w-full opacity-0 transition-opacity duration-1500" 
        />
        <div className="absolute top-[10%] left-[4%] text-white w-[80%] flex flex-col justify-between h-[90%]">
          <p className="w-[70%] text-[3vw]">Accelerating adaptive laboratory evolution via engineering of mutagenesis system for synthetic biology applications</p>
          <div>
            <div className="h-[2px] bg-white w-[30%]"></div>
            <p className="text-white/30 text-[7vw]">MP6-UTT</p>
          </div>
        </div>

      </section>
      <section className="w-full relative">
        <img 
          ref={el => imageRefs.current[1] = el} 
          src="images/home/2.webp" 
          className="w-full opacity-0 transition-opacity duration-1500" 
        />
        <div className="absolute top-[5%] left-[4%] text-white w-[80%] flex flex-col justify-between h-[90%]">
          <h1 className="w-[70%] text-[5vw]">Project Overview</h1>
          <p className="w-[80%] text-[2.5vw]">This project developed a high-efficiency genetic tool named <strong>MP6-UTT</strong> for <strong>stress-directed evolution</strong>.<div className="h-[2px] bg-white w-[40%] mt-4"></div></p>
          <p className="w-[100%] text-[2.5vw]">
            By integrating multiple base-modifying enzymes, MP6-UTT significantly enhances the efficiency and diversity of mutagenesis within bacterial cells, accelerating the adaptive evolution of microbes under simulated real-world environmental pressures. 
          </p>
          <div>
            <div className="text-white/30 text-[7vw]">MP6-UTT</div>
          </div>
        </div>
      </section>
      <section className="w-full aspect-[1920/1076] bg-white flex flex-col justify-between items-center">
        <div className="text-[2vw] pt-10 px-20">MP6-UTT provides a rapid, versatile, and highly efficient platform for strain adaptation in synthetic biology.</div>
        <div className="w-full flex justify-between gap-20 h-[60%] px-20">
          <div className="border-1 border-gray-300 rounded-xl flex-1 h-full p-10 flex flex-col justify-between items-center"> 
            <img src="images/home/3-1.png" className="w-[20%]" />
            <div className="uppercase text-[2vw]">two E. coli strains</div>
            <div className="text-[1.5vw] text-center">We successfully applied MP6-UTT to two E. coli strains
 (BL21 and Nissle 1917).</div>
          </div>
          <div className="border-1 border-gray-300 rounded-xl flex-1 h-full p-10 flex flex-col justify-between items-center"> 
            <img src="images/home/3-2.png" className="w-[20%]" />
            <div className="uppercase text-[2vw]">three abilities</div>
            <div className="text-[1.5vw] text-center">Improving their ability to utilize xylose, tolerate high salinity in seawater, and survive in simulated gut conditions using tagatose.</div>
          </div>
        </div>
        <div className="w-full h-[30px]" style={{background:"linear-gradient(to bottom, #AC82EB 10%, #4C1894) 10%"}}></div>
      </section>
      <section className="w-full relative aspect-[1920/1076] flex flex-col">
        <div className="relative w-full">
          <img 
            ref={el => imageRefs.current[2] = el} 
            src="images/home/4.webp" 
            className="w-full opacity-0 transition-opacity duration-1500" 
          />
          <div className="absolute h-full top-0 left-[5%] flex items-center justify-center text-white text-[4vw] uppercase">Research <br/>Background</div>
        </div>
        <div className="w-full flex justify-between flex-1 py-10 bg-white">
          <div className="px-10 text-2xl flex-1"> Microbial chassis engineered in synthetic biology often suffer from performance loss under real industrial or therapeutic conditions due to fluctuations in pH, salinity, temperature, or nutrient availability. </div>
          <div className="w-[1px] h-full bg-[#4C1894]"></div>
          <div className="px-10 text-2xl flex-1"> Conventional directed evolution methods—such as serial passaging or earlier mutagenesis tools—are limited by low efficiency and slow adaptation.  </div>
          <div className="w-[1px] h-full bg-[#4C1894]"></div>
          <div className="px-10 text-2xl flex-1">     Recent advances in in vivo mutagenesis systems (e.g., MP6) and base-editing enzymes offer new ways to generate genetic diversity rapidly, but there remains a need for more efficient and low-toxicity tools to support complex environmental adaptation. </div>
        </div>
      </section>
      <section className="w-full relative">
        <img 
          ref={el => imageRefs.current[3] = el} 
          src="images/home/5.webp" 
          className="w-full opacity-0 transition-opacity duration-1500" 
        />
        <div className="absolute top-[10%] left-[4%] text-white w-[80%] flex flex-col justify-between h-[50%]">
          <div className="uppercase text-[4vw] text-white">Research Questions</div>
          <div className="w-[70%]">
            <p className="mb-8 text-2xl">1. How can we achieve efficient, controllable, and broad-spectrum in vivo mutagenesis without significantly compromising host cell viability, to rapidly enhance microbial adaptation under specific stress conditions?</p>
            <p className="text-2xl">2. How can this evolutionary strategy be applied to different bacterial strains and diverse real-world scenarios—such as industrial bioprocessing or gut colonization—to demonstrate its versatility and practical utility?</p>
          </div>
        </div>
      </section>
      <section className="w-full relative">
        <img 
          ref={el => imageRefs.current[4] = el} 
          src="images/home/6.webp" 
          className="w-full opacity-0 transition-opacity duration-1500" 
        />
        <div className="absolute top-[5%] left-[5%]  text-[#4C1894]/40 text-[7vw]">MP6-UTT</div>
        <div className="absolute top-[10%] left-[4%] text-white w-[80%] flex flex-col justify-between h-[50%]">
          <div className="uppercase text-[4vw] text-white">Project Significance</div>
        </div>
        <div className="absolute bottom-[10%] right-[4%] text-white w-[50%] border-white border-solid border-t-[1px] border-b-[1px] py-4 px-2">
          <p className="mb-4 text-xl xl:text-3xl">MP6-UTT not only shortens the microbial adaptation cycle (e.g., achieving high salt tolerance within one week) but also expands the application scope of synthetic biology strains. </p>
          <p className="text-xl xl:text-3xl">The tool is applicable to various hosts (e.g., Bacillus subtilis, Vibrio natriegens) and holds promise for complex applications such as space synthetic biology, bio-waste recycling, and targeted cancer therapy. </p>
        </div>
      </section>
      <section className="w-full relative">
        <img 
          ref={el => imageRefs.current[5] = el} 
          src="images/home/7.webp" 
          className="w-full opacity-0 transition-opacity duration-1500" 
        />
        <div className="absolute top-[10%] left-[4%] text-white w-[60%] border-white border-solid border-t-[1px] border-b-[1px] py-4 px-2">
          <p className="text-xl xl:text-3xl">This work provides a powerful evolutionary engine to bridge the gap from laboratory design to real-world implementation, accelerating both basic research and industrial translation in synthetic biology.</p>
        </div>
        <div className="absolute bottom-[5%] left-[5%] bg-gray-300/80 w-[90%] flex">
          <div className="flex-1 p-4">
            <div className="text-[#4C1894] text-2xl xl:text-4xl mb-2">About Us</div>
            <p className="py-2 text-lg text-[#4C1894]">We are a team composed of members with diverse academic backgrounds, united by a common passion for life sciences and focused on the cutting-edge field of biology. We firmly believe that through engineered biological designs, we can provide innovative and sustainable solutions to the pressing challenges facing humanity. On the iDEC stage, we strive to integrate interdisciplinary wisdom into concrete research practices, to explore the unknowns of life sciences and contribute to the future of the world.</p>
          </div>
          <div className="flex-1 p-4 text-[#4C1894]">
            <div className=" text-2xl xl:text-4xl mb-2">Contact Us</div>
            <div className="py-2">
            <p className="text-base mb-2">iDEC_2025 PIM-VCA</p>
            <p className="text-base">Email: <a href="mailto:pimvca@163.com">pimvca@163.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}