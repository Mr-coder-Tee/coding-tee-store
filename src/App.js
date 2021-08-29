import React, { useState, useEffect } from "react";
import NavBar from "./Components/Navigation/NavBar";
import Cart from "./Components/Cart/Cart";
import HomePage from "./Components/HomePage/HomePage";
import Collection from "./Components/Collections/Collection";
import Footer from "./Components/Footer/Footer";
import Subcribe from "./Components/HomePage/Subcribe/Subcribe";
import Legal from "./Components/Legal/legal";
import Checkout from "./Components/CheckOutForm/CheckOut/checkout";
import { commerce } from "./lib/commerce";
import "./style.css";
import { storeCollection } from "./data";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  // ----------useState----------

  const [products, SetProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('')
  const [categories,setCategories]=useState({})


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
    variant
  ) => {
    const item = await commerce.cart
      .add(productId, quantity,variant ) //, { colorGroupId: color, sizeGroupId: size }
      .catch((err) => {
        console.log("error--", err);
      });
    setCart(item.cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };
  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const inComingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(inComingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message)
    }
  };


  const getCategory=async()=>{

    const {data}=await commerce.categories.list()
    setCategories(data)

  }
  // X----------Fuctions----------X

  useEffect(() => {
    getProducts();
    getCart();
    getCategory();

  }, []);


  return (
    <Router>
      <div className="App-container">
        <NavBar totalItems={cart.total_items} />

        <Switch>
          <Route exact path="/">
          <HomePage products={products}  categories={categories}/>
          </Route>

          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>

          <Route exact path="/collection/:category">
            <Collection products={products} handleAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/checkout">
            <Checkout cart={cart} handleCaptureCheckout={handleCaptureCheckout} order={order} error={errorMessage}/>
          </Route>

          <Route exact path="/legal/:id">
            <Legal/>
          </Route>

        </Switch>
        <Subcribe />
        <Footer products={products} />
      </div>
    </Router>
  );
}

export default App;
