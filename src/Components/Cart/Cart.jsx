import React from 'react';




const Cart = () => {
    return ( 
        <div className="cartContainer">
            <div className="cartheading">
                <h1>Your cart</h1>
            </div>


            <div className="cartProperties">
                <div className="cartTotals">
                    <h3>Subtotal:</h3>
                    <h4>R220</h4>
                </div>
                <div className="buttonsHolder">
                    <button className="design-danger btnSize mag design">Empty cart</button>
                    <button className="design-primary btnSize mag design">CheckOut</button>
                </div>
            </div>
            
        </div> 
        
        );
}
 
export default Cart;