import React from "react";
import useStyles from "./styles";
import { WbSunnyOutlined, Brightness2Outlined } from "@material-ui/icons";
import cup from "../../Images/cup_java_icon.png";

const Footer = ({ products }) => {
  const classes = useStyles();
  return (
    <div className={classes.footerContainer}>
      <div className={`row ${classes.row}`}>
        <div className={classes.contactInfo}>
          <div className={classes.logo}>
            <img src={cup} alt="img" />
            <h1>Coding Tee</h1>
          </div>
          <div className={classes.contactdetails}>
            <a href="https://twitter.com/terrytheecoder" target="_blank">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/Tebatso-Manaka" target="_blank">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/terrence_thee_coder?r=nametag" target="_blank">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/terrence-tebatso-manaka-7a25a913a" target="_blank">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/Mr-coder-Tee" target="_blank">
              <i class="fa fa-github"></i>
            </a>
            <a href="" target="_blank">
              <i class="fa fa-whatsapp"></i>
            </a>
          </div>
        </div>
        <div className={classes.footerother}>
          <div className={classes.FooterCollections}>
            <h2>Collections</h2>
            <ul>
              {products.map((categories) => (
                <li>{categories.category}</li>
              ))}
            </ul>
          </div>
          <div className={classes.legal}>
            <h2>Legal</h2>
            <ul>
              <li>Privacy Policy</li>
              <li>Copy Right Policy</li>
              <li>Delivery Policy</li>
              <li>Refund Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes.copyRights}>
        <div>
          <span>&copy;2021 Coding Tee.</span>
        </div>
        <div>
          <Brightness2Outlined />
        </div>
      </div>
    </div>
  );
};

/* <WbSunnyOutlined/> light */
export default Footer;
