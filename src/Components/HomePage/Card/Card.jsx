import React from 'react';
import ai from '../../../Images/AI.jpg'



const HomeCard = ({product}) => {
    console.log("product:->",product);

    return ( 
        <div className="homecard">
            <div className="imgbx">
                <img src={product.img} alt="AI-img" />
            </div>
            <div className="btnLabel">
                <h3 className="title">{product.category}</h3>
                <button className="btnView">View Collection</button>
            </div>
        </div> );
}
 
export default HomeCard;