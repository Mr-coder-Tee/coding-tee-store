import React from 'react';
import ai from '../../../Images/AI.jpg'

const HomeCard = () => {
    return ( 
        <div className="homecard">
            <div className="imgbx">
                <img src={ai} alt="AI img" />
            </div>
            <div className="btnLabel">
                <h3 className="title">AI</h3>
                <button className="btnView">View Collection</button>
            </div>
        </div> );
}
 
export default HomeCard;