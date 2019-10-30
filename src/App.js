import React from 'react';
import Footer from './Components/Footer.jsx'
import Main from './Components/Main.jsx'
import Navbar from './Components/Navbar.jsx';
import Bouton from './Components/Bouton';
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Bouton/>
      <Footer/>
    </div>

  );
}

export default App;
