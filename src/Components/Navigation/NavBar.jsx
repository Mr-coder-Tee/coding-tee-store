import React from "react";
import cup from "../../Images/cup_java_icon.png";
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart, ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";
import useStyles from "./style";

const NavBar = ({ totalItems }) => {
  const classes = useStyles();
  return (
    <div className={classes.NavContainer}>
      <div className={classes.NavContainerLogo}>
        <IconButton class={classes.logobtn} component={Link} to="/">
          <img src={cup} alt="img" />
          <h2>Coding Tee</h2>
        </IconButton>
      </div>
      <div className="cart-btn">
        <IconButton
          component={Link}
          to="/cart"
          aria-label="show cart item"
          className={classes.btn}
        >
          <Badge badgeContent={totalItems}>
            <ShoppingCart />
          </Badge>
        </IconButton>
      </div>
    </div>
  );
};

// https://www.iconfinder.com/icons/889370/coffee_espresso_icon
export default NavBar;
