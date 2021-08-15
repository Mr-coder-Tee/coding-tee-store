import React from 'react';
import cup from '../../Images/coffee_icon.png'
import { IconButton,Badge } from '@material-ui/core';
import { ShoppingCart,ShoppingBasket } from '@material-ui/icons';


const NavBar = () => {
    return ( 
        <div className="Nav-container">
            <div className="logo">
                <div className="imgbx"><img src={cup} alt="img"/></div>
                <h4>Coding Tee</h4>
            </div>
            <div className="cart-btn">
                <IconButton aria-label="show cart item" color="inherit">
                    <Badge badgeContent={2}>
                        <ShoppingCart/>
                    </Badge>
                </IconButton>
            </div>
        </div> );
}
 


// https://www.iconfinder.com/icons/889370/coffee_espresso_icon
export default NavBar;