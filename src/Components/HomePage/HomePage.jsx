import { Divider } from '@material-ui/core';
import HomeCard from './Card/Card';
import React from 'react';
import ai from '../../Images/AI.jpg'



const HomePage = ({products}) => {
    return (<div className="homepageContainer">
                {
                    products.map((product)=>(
                        <HomeCard key={product.id} product={product}/>
                    ))
                }
            </div>
    );
}
 
export default HomePage;