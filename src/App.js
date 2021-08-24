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
  // ----------useState----------

  const [products, SetProducts] = useState([]);
  const [cart, setCart] = useState({});

  // X----------useState----------X

  // ----------Fuctions----------
  const getProducts = async () => {
    const { data } = await commerce.products.list();
    SetProducts(data);
  };
  const getCart = async () => {
    setCart(await commerce.cart.retrieve());
  };
  const handleAddToCart = async (
    productId,
    quantity,
    color,
    colorGroupId,
    size,
    sizeGroupId
  ) => {
    console.log("color", color, colorGroupId);
    console.log("size", size, sizeGroupId);
    const item = await commerce.cart
      .add(productId, quantity, { colorGroupId: color, sizeGroupId: size })
      .catch((err) => {
        console.log("error--", err);
      });
    setCart(item.cart);
  };

  const handleUpdateToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };
  const handleRemoveFromCar = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  // X----------Fuctions----------X

  useEffect(() => {
    getProducts();
    getCart();
  }, []);

  return (
    <Router>
      <div className="App-container">
        <NavBar totalItems={cart.total_items} />

        <Switch>
          <Route exact path="/">
            <HomePage products={products} />
          </Route>

          <Route exact path="/cart">
            <Cart cart={cart} />
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
