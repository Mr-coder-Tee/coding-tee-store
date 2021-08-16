import React from 'react';



const HomeCard = ({product}) => {
    console.log("product:->",product);

    return ( 
        <div className="homecard">
            <div className="imgbx">
                <img src={product.img} alt={product.category} />
            </div>
            <div className="btnLabel">
                <h3 className="title">{product.category}</h3>
                <button className="btnView">View Collection</button>
            </div>
            <div className="black"/>
        </div> );
}
 
export default HomeCard;