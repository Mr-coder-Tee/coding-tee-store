import React from 'react';
import cup from '../../Images/coffee_icon.png'
import { IconButton,Badge } from '@material-ui/core';
import { ShoppingCart,ShoppingBasket } from '@material-ui/icons';

import useStyles from './style'

const NavBar = () => {
    const classes=useStyles();
    return ( 
        <div className={classes.NavContainer}>
            <div className={classes.NavContainerLogo}>
                <img src={cup} alt="img"/>
                <h4>Coding Tee</h4>
            </div>
            <div className="cart-btn">
                <IconButton aria-label="show cart item" color="inherit">
                    <Badge badgeContent={5}>
                        <ShoppingCart/>
                    </Badge>
                </IconButton>
            </div>
        </div> );
}
 


// https://www.iconfinder.com/icons/889370/coffee_espresso_icon
export default NavBar;