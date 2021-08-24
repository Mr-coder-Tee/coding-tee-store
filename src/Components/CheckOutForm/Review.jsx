import React from 'react';
import { List,ListItem,ListItemText } from '@material-ui/core';


const Review = ({checkoutToken}) => {
    return ( <div>
        
        <h4>Order Summary</h4>
        <List disablePadding>
            {
                checkoutToken.live.line_items.map((product)=>(
                    <ListItem style={{padding:'10px 0'}} key={product.name}>
                        <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`}/>
                        <p>{product.line_total.formatted_with_symbol}</p>
                    </ListItem>
                ))
            }
            <listItem style={{padding:'10px 0'}}>
                <ListItemText primary="Total"/>
                <h4 style={{fontWeight:'700'}}>
                    {checkoutToken.live.subtotal.formatted_with_symbol}
                </h4>
            </listItem>
        </List>
        
    </div> );
}
 
export default Review;