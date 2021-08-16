import React from 'react';
import NavBar from './Components/Navigation/NavBar';
import Footer from './Components/Footer/Footer'
import HomePage from './Components/HomePage/HomePage';
import './style.css'
import {storeCollection} from './data'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

const products=storeCollection;



function App() {
  return (
    <div className="App-container">
        <NavBar/>
          <Router>
             <Switch>

               <Route exact path="/">
                  <HomePage products={products}/>
               </Route>
               
             </Switch>
          </Router>


        <Footer products={products}/>
    </div>
  );
}

export default App;
