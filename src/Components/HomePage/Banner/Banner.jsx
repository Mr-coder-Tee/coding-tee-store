import React from 'react';


const Banner = () => {
    return ( 
            <div className="bannerContainer flexCenter">
                <div className="backgroundImg">
                    <img src={'https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'} alt="banner" />
                </div>
                <div className="content">
                    <h1><span className="if">if</span> <span className="brackets">(</span> you like to code? <span className="brackets">)</span><br />then it is time to show off your super powers.</h1>
                    <p>Grad your favourite T-shirt design or pick from your field.</p>
                    <p>place your order online and recieve free shipping anywhere in South Africa</p>
                    <a href="#">T's and C's Apply</a>
                    <div className="btnContainer">
                        <button className="btnView">View All Collections</button>
                    </div>
                </div>
                <div className="ImgCover"/>
            </div> );
}
 
export default Banner;