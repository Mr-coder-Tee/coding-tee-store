import React from 'react';
import useStyles from './styles'
import { WbSunnyOutlined,Brightness2Outlined } from '@material-ui/icons';



const Footer = () => {
    return ( 
        <div className="footerContainer">
            <div className="SubForm">

            </div>
            <div className="conatact">

            </div>
            <div className="copyRights">
                <div>
                    <span>&copy;2021 Coding Tee</span>
                </div>
                <div>
                    <WbSunnyOutlined/>
                    <Brightness2Outlined/>
                </div>
            </div>
        </div> 
    );
}
 
export default Footer;