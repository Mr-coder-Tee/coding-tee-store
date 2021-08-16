import React from 'react';
import NavBar from './Components/Navigation/NavBar';
import Cart from './Components/Cart/Cart';
import HomePage from './Components/HomePage/HomePage';
import Collection from './Components/Collections/Collection';
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

               <Route exact path="/cart">
                  <Cart/>
               </Route>

                <Route exact path="/collection">
                    <Collection/>
                </Route>

             </Switch>
        </Router>
    </div>
  );
}

export default App;
