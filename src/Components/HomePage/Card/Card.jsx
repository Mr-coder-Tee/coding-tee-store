import React from 'react';
import { Link } from 'react-router-dom';



const HomeCard = ({product}) => {

    return ( 
        <div className="homecard">
            <div className="imgbx">
                <img src={product.img} alt={product.category} />
            </div>
            <div className="btnLabel">
                <h3 className="title">{product.category}</h3>
                <Link to="/collection" className="btnView">View Collection</Link>
            </div>
            <div className="black"/>
        </div> );
}
 
export default HomeCard;