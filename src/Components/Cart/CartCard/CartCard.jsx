import React from 'react';
import pic from './javascriptdesign.jpeg';

const CartCard = () => {
    return ( 
        <div className="CartCardContainer">
            <div className="cartImgbx">
                <img src={pic} alt="" />
            </div>
            <div className="addAndSub">
                <div className="nameNprice">
                    <h3>Javascript web developer</h3>
                    <h4>R150.00</h4>
                </div>
                <div className="buttons">
                    <div className="quantity">
                        <button className="subtract">-</button>
                        <h4 >1</h4>
                        <button className="add">+</button>
                    </div>
                    <div className="removeBtn">
                        <button className="remove">Remove</button>
                    </div>
                </div>
            </div>
        </div> 
    );
}
 
export default CartCard;