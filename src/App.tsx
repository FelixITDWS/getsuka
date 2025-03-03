import {useState, useEffect, useContext} from 'react';
import { useAnimate } from "framer-motion";
import DataContext from './Stores/Context';

import './App.css';

import Navbar from './Components/Navbar';

// import background from "/src/assets/bg-small.png";
// import actor from "/src/assets/actor.png";
// import welcome from '/src/assets/歡迎光臨麵屋.png';
// import welcomeTablet from '/src/assets/歡迎光臨麵屋-tablet.png';
// import welcomeMobile from '/src/assets/歡迎光臨麵屋-Mobile.png';
// import logoImg from '/src/assets/LOGO-01.png';
// import paitanBanner from '/src/assets/paitan_banner.png';
// import paitabBannerMobile from '/src/assets/paitan_banner-Mobile.png';



function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [navbar, animateNavbar] = useAnimate();
  const { appSize, setAppSize } = useContext(DataContext);

  const cacheImages = async (srcArray: string[]): Promise<void> => {
    const promises = srcArray.map((src) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    });
    await Promise.all(promises);
  };

  // Inital loading
    useEffect(() => {
    // const images = [welcomeMobile, paitabBannerMobile, welcomeTablet, paitanBanner, welcome, background, logoImg];

    // cacheImages(images);

    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  }, []);

  // Detect window size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setAppSize("Mobile");
      } else if (window.innerWidth < 992) {
        setAppSize("Tablet");
      } else {
        setAppSize("Desktop");
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [appSize, setAppSize]);

  // Navbar animation
  useEffect(() => {
    animateNavbar(navbar.current, { opacity: [0, 1] }, { ease: "easeInOut", duration: 1.5, delay: appSize === "Mobile" || appSize === "Tablet" ? 2.5 : 4.5 });
  }, [animateNavbar, appSize, navbar]);
  {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }

}

export default App
