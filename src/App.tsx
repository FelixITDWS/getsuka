import './App.css'

import { Navbar } from './Components/Navbar/Navbar';
import { Title } from './Components/Title/Title';

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
          <Title text='介紹' />
        </div>
      </section>
    </div>
  );
}

export default App
