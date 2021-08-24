import React from 'react';
import pic from './javascriptdesign.jpeg';

const CartCard = ({item}) => {
  console.log("item--->",item);

    return ( 
        <div className="CartCardContainer">
            <div className="cartImgbx">
                <img src={item.media.source} alt="" />
            </div>
            <div className="addAndSub">
                <div className="nameNprice">
                    <h3>{item.name}</h3>
                    <h4>{item.price.formatted_with_symbol}</h4>
                </div>
                <div className="buttons">
                    <div className="quantity">
                        <button className="subtract">-</button>
                        <h4 >{item.quantity}</h4>
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