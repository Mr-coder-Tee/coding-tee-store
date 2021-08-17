import React from 'react';


const Banner = () => {
    return ( 
            <div className="bannerContainer flexCenter">
                <div className="backgroundImg">
                    <img src={'https://images.unsplash.com/photo-1524666643752-b381eb00effb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80'} alt="" />
                </div>
                <div className="content">
                    you like to code? 
                    <br />
                    it is time to show off your super powers
                </div>
                <div className="ImgCover"/>
            </div> );
}
 
export default Banner;