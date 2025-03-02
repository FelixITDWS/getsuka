import {useState, useEffect, useContext } from 'react';
import './App.css'

import Navbar from './Components/NavBar';

function App() {
  useEffect(() => {
    return (
      <div ref={navbar} className="fixed z-[100]">
        <Navbar />
      </div>
    )
  }, []);
}

export default App
