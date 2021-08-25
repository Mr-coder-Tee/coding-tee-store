import React from "react";
import CartCard from "./CartCard/CartCard";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const Cart = ({ cart,handleUpdateCartQty,handleRemoveFromCart,handleEmptyCart }) => {



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
                  <CartCard key={item.id} item={item} 
                  handleUpdateCartQty={handleUpdateCartQty}
                  handleRemoveFromCart={handleRemoveFromCart}/>
              ))
          }
      </div>
      <div className="cartProperties">
        <div className="cartTotals">
          <h3>Subtotal:</h3>
          <h4>{cart.subtotal.formatted_with_symbol}</h4>
        </div>
        <div className="buttonsHolder">
          <Button type="button" size="large" class="design-danger btnSize mag design" onClick={handleEmptyCart}>
            Empty cart
          </Button>
          <Button type="button" size="large" component={Link} to="/checkout"  class="design-primary btnSize mag design">
            CheckOut
          </Button>
        </div>
      </div>
    </>
  );


  // if(!cart.line_items.length)return "Loading...";

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
