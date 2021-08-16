import React from 'react';
import useStyles from './styles'
import { WbSunnyOutlined,Brightness2Outlined } from '@material-ui/icons';
import cup from '../../Images/cup_java_icon.png'

const Footer = ({products}) => {
    const classes=useStyles();
    return ( 
        <div className={classes.footerContainer}>
            <div className={classes.row}>
                <div className={classes.contactInfo}>
                    <div className={classes.logo}>
                        <img src={cup} alt="img"/>
                        <h1>Coding Tee</h1>
                    </div>
                    <div className={classes.contactdetails}>
                        <i class="fa fa-twitter" ></i>
                        <i class="fa fa-facebook" ></i>
                        <i class="fa fa-instagram" ></i>
                        <i class="fa fa-linkedin" ></i>
                        <i class="fa fa-github" ></i>
                        <i class="fa fa-whatsapp" ></i>
                    </div>
                </div>
                <div className={classes.footerother}>
                    <div className={classes.FooterCollections}>
                        <h2>Collections</h2>
                        <ul>
                            {
                                products.map((categories)=>(
                                    <li>{categories.category}</li>
                                ))
                            }
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
                    <Brightness2Outlined/>
                </div>
            </div>
        </div> 
    );
}

/* <WbSunnyOutlined/> light */
export default Footer;