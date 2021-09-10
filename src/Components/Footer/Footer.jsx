import React from "react";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { WbSunnyOutlined, Brightness2Outlined } from "@material-ui/icons";
import cup from "../../Images/cup_java_icon.png";

const Footer = ({ categories }) => {
  console.log("categories-->", categories);

  const FullList = () => {
    return (
      <>
        <ul>
          {categories.map((categories) => (
            <li key={categories.id}>
              <Link to={"/collection/" + categories.id}>{categories.name}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  };

  const LoadingList = () => {
    return (
      <>
        <h5>Loading</h5>
      </>
    );
  };

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
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/Tebatso-Manaka" target="_blank">
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/terrence_thee_coder?r=nametag"
              target="_blank"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/terrence-tebatso-manaka-7a25a913a"
              target="_blank"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/Mr-coder-Tee" target="_blank">
              <i className="fa fa-github"></i>
            </a>
            <a href="https://wa.me/message/OOIJ6PED2BL3O1" target="_blank">
              <i className="fa fa-whatsapp"></i>
            </a>
          </div>
        </div>
        <div className={classes.footerother}>
          <div className={classes.FooterCollections}>
            <h2>Collections</h2>
            {
              categories.length===0?<LoadingList/>:<FullList/>
            }
          </div>
          <div className={classes.legal}>
            <h2>Legal</h2>
            <ul>
              <li>
                <Link to="/legal/PrivacyPolicy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/legal/CopyrightPolicy">Copyright Policy</Link>
              </li>
              <li>
                <Link to="/legal/DeliveryPolicy">Delivery Policy</Link>
              </li>
              <li>
                <Link to="/legal/RefundPolicy">Refund Policy</Link>
              </li>
              <li>
                <Link to="/legal/TermsandConditions">Terms & Conditions</Link>
              </li>
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
