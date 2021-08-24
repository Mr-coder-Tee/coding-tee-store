import React from "react";
import CartCard from "./CartCard/CartCard";
import { Link } from "react-router-dom";

const Cart = ({ cart }) => {



  const EmptyCart = () => (
    <div className="emptyHandler">
      You have no items in your shoppubg cart,
      <Link to="/">start adding some</Link>!
    </div>
  );
  const FilledCart = () => (
    <>
      <div className="cardCards">
          {
              cart.line_items.map((item)=>(
                  <CartCard key={item.id} item={item}/>
              ))
          }
      </div>
      <div className="cartProperties">
        <div className="cartTotals">
          <h3>Subtotal:</h3>
          <h4>{cart.subtotal.formatted_with_symbol}</h4>
        </div>
        <div className="buttonsHolder">
          <button className="design-danger btnSize mag design">
            Empty cart
          </button>
          <button className="design-primary btnSize mag design">
            CheckOut
          </button>
        </div>
      </div>
    </>
  );


  if(!cart.line_items.length)return "Loading...";

  return (
    <div className="cartContainer">
      <div className="cartheading">
        <h1>Your cart</h1>
      </div>
      {!cart.line_items.length ? <EmptyCart/> : <FilledCart/>}
    </div>
  );
};

export default Cart;
