import React from 'react';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles'

import codeworksdesign from './codeworksdesign.jpeg'
import coffeedesign from './coffeedesign.jpeg'
import javascriptdesign from './javascriptdesign.jpeg'
const arr=[codeworksdesign,coffeedesign,javascriptdesign]


const CollectionCard = ({product}) => {

    const classes=useStyles();
    
    return ( 
            <div  className="collectioncard">
                <div className="collectionImgbx">
                    <img src={arr[product.product_id]} alt="" />
                </div>
                <div className="productDetails">
                    <h3>{product.name}</h3>
                    <div className="AddShoppingCart">
                        <p><strong>{product.price}</strong></p>
                        <AddShoppingCart className="addcart"/>
                    </div>
                </div>
            </div> 
        );
}
 
export default CollectionCard;