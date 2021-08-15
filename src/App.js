import React from 'react';
import NavBar from './Components/Navigation/NavBar';
import Footer from './Components/Footer/Footer'
import './style.css'

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';



function App() {
  return (
    <div className="App-container">
        <NavBar/>

        <Footer/>
    </div>
  );
}

export default App;
