import React from 'react';
import pic from './javascriptdesign.jpeg';

const CartCard = ({item,handleUpdateCartQty,handleRemoveFromCart}) => {

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
                        <button className="subtract" onClick={()=>handleUpdateCartQty(item.id,item.quantity-1)}>-</button>
                        <h4 >{item.quantity}</h4>
                        <button className="add" onClick={()=>handleUpdateCartQty(item.id,item.quantity+1)}>+</button>
                    </div>
                    <div className="removeBtn">
                        <button className="remove" onClick={()=>handleRemoveFromCart(item.id)}>Remove</button>
                    </div>
                </div>
            </div>
        </div> 
    );
}
 
export default CartCard;