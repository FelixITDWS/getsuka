import './App.css'

import { useState, useEffect, useContext} from "react";
import DataContext from "./stores/Context"
import Navbar from './Components/Navbar';
import Title from './Components/Title';
import Vtuber from './Pages/Vtuber';
import Fan from './Pages/Fan';
import Character from './Pages/Character';
import Media from './Pages/Media';
import Footer from './Components/Footer'


import getsukaSetup from './assets/getsuka-setup.jpg'
import GetsukaEat  from './assets/getsuka-eat.png'
import getsukaStar from './assets/getsuka-star.png'
import getsukaHappy from './assets/getsuka-happy.png'

function App() {
  // const { appSize, setAppSize } = useContext(DataContext);

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

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth < 768) {
  //       setAppSize("Mobile");
  //       console.log(appSize);
  //     } else if (window.innerWidth < 992) {
  //       setAppSize("Tablet");
  //       console.log(appSize);
  //     } else {
  //       setAppSize("Desktop");
  //       console.log(appSize);
  //     }
  //   }
  //   handleResize();
  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   }
  // }, [appSize, setAppSize]);

  useEffect(() => {
    const images = [getsukaSetup, GetsukaEat, getsukaStar, getsukaHappy];

    cacheImages(images);

    setTimeout(async () => {
    }, 3000);

    // Scroll to top when refresh and loading
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  }, []);

  return(
    <div>
      <div className='navbar-container'>
        <Navbar />
      </div>
      <section id="banner">
        <img src={getsukaSetup} alt='getsuka-setup' />
      </section>
      <section id ="intro">
        <div className='intro-container'>
          <div>
            <Title text='介紹' />
          </div>
          <Media />
          <div>
            <Vtuber />
          </div>
        </div>
      </section>
      <section id="fan">
        <div className='fan-container'>
          <Fan />
        </div>
      </section>
      <section id="member">
        <div className='member-container'>
          <div>
            <Title text='相關人物' />
          </div>
          <div>
            <Character />
          </div>
        </div>
      </section>
      <section id="more-info">
        <div>
          <Title text='更多資訊' />
        </div>
        <div className='more-info-container'>
          <a href='https://docs.google.com/spreadsheets/d/1sOmeablnN8j1IdqmpXhtWDvST33AsAzPbziVyU6fGj4/edit?usp=drivesdk' target='_blank'>
            <img src={getsukaHappy} alt="更多資訊" />
            <p>玥華小檔案</p>
          </a>
          <a href='https://p.ecpay.com.tw/5AB9B96' target='_blank'>
            <img src={GetsukaEat} alt='綠界' />
            <p>綠界</p>
          </a>
          <a href='https://gestuka.fandom.com/' target='_blank'>
            <img src={getsukaStar} alt="Wiki" />
            <p>Wiki</p>
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App
