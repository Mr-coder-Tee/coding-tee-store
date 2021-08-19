import React from "react";
import NavBar from "./Components/Navigation/NavBar";
import Cart from "./Components/Cart/Cart";
import HomePage from "./Components/HomePage/HomePage";
import Collection from "./Components/Collections/Collection";
import Footer from "./Components/Footer/Footer";
import Subcribe from "./Components/HomePage/Subcribe/Subcribe";
import { commerce } from "./lib/commerce";
import "./style.css";
import { storeCollection } from "./data";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const products = storeCollection;

function App() {
  return (
    <Router>
      <div className="App-container">
        <NavBar />

        <Switch>
          <Route exact path="/">
            <HomePage products={products} />
          </Route>

          <Route exact path="/cart">
            <Cart />
          </Route>

          <Route exact path="/collection">
            <Collection />
          </Route>
        </Switch>
        <Subcribe />
        <Footer products={products} />
      </div>
    </Router>
  );
}

export default App;
