import React, { useState, useEffect } from "react";
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

function App() {
  const [products, SetProducts] = useState([]);
  const [cart, setCart] = useState({});

  const getProducts = async () => {
    const { data } = await commerce.products.list();
    SetProducts(data);
  };
  const getCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  useEffect(() => {
    getProducts();
    getCart();
  }, []);

  console.log("cart----->", cart);

  return (
    <Router>
      <div className="App-container">
        <NavBar totalItems={cart.total_items} />

        <Switch>
          <Route exact path="/">
            <HomePage products={products} />
          </Route>

          <Route exact path="/cart">
            <Cart />
          </Route>

          <Route exact path="/collection">
            <Collection products={products} handleAddToCart={handleAddToCart} />
          </Route>
        </Switch>
        <Subcribe />
        <Footer products={products} />
      </div>
    </Router>
  );
}

export default App;
