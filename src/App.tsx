import './App.css'

import { Navbar } from './Components/Navbar/Navbar';
import { Title } from './Components/Title/Title';
import Vtuber from './Pages/Vtuber';


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
    </div>
  );
}

export default App
