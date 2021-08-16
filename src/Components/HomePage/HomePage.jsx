import { Divider } from '@material-ui/core';
import HomeCard from './Card/Card';
import React from 'react';
import {storeCollection} from '../../data'
import ai from '../../Images/AI.jpg'

const products=storeCollection;


const HomePage = () => {
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