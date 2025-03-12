import './App.css'

import Navbar from './Components/Navbar';
import Title from './Components/Title';
import Vtuber from './Pages/Vtuber';
import Fan from './Pages/Fan';
import Character from './Pages/Character';
import Media from './Pages/Media';


import getsukaSetup from './assets/getsuka-setup.jpg'

function App() {
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
      <section id="media">
        <div>
          <Title text='社群連結' />
        </div>
        <div>
          <Media />
        </div>
      </section>
    </div>
  );
}

export default App
