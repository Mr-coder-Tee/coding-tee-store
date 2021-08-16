import { Divider } from '@material-ui/core';
import HomeCard from './Card/Card';
import SaleCountDown from './SalesCountDown/SaleCountDown';
import Banner from './Banner/Banner';
import React,{useState} from 'react';



const HomePage = ({products}) => {
    const [id,setId]=useState();
    const getCollectionID=(_id)=>{
        setId(_id);
    }

    return (
        <div className="homepage">
            <Banner/>
            <SaleCountDown/>
            <div className="homepageContainer">
                {
                    products.map((product)=>(
                        <HomeCard key={product.id} product={product}/>
                    ))
                }
            </div>
        </div>
    );
}
 
export default HomePage;