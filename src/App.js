import React from 'react';
import NavBar from './Components/Navigation/NavBar';
import Footer from './Components/Footer/Footer'
import HomePage from './Components/HomePage/HomePage';
import './style.css'

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';



function App() {
  return (
    <div className="App-container">
        <NavBar/>
          <Router>
             <Switch>
               <Route exact path="/">
                  <HomePage/>
               </Route>
             </Switch>
          </Router>
        <Footer/>
    </div>
  );
}

export default App;
