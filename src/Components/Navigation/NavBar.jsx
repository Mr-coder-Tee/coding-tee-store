import React,{useState} from "react";
import cup from "../../Images/cup_java_icon.png";
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart, ShoppingBasket } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import useStyles from "./style";

const NavBar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();
  const [navBar,setnavBar]=useState(false);

  const changeNavBackground=()=>{
    if(window.scrollY>=80){
      setnavBar(true)
    }else{
      setnavBar(false)
    }
  }
  window.addEventListener('scroll',changeNavBackground);
  return (
    <div className={ `${classes.NavContainer} ${navBar?'navbar active':'navbar'}`}>
      <div className={classes.NavContainerLogo}>
        <IconButton className={classes.logobtn} component={Link} to="/">
          <img src={cup} alt="img" />
          <h4>Coding Tee</h4>
        </IconButton>
      </div>
      <div className="cart-btn">
        {(location.pathname !== "/checkout"&&location.pathname !== "/cart") && (
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
        )}
      </div>
    </div>
  );
};

// https://www.iconfinder.com/icons/889370/coffee_espresso_icon
export default NavBar;
