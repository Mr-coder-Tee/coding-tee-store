import { Divider } from '@material-ui/core';
import HomeCard from './Card/Card';
import Footer from '../Footer/Footer';
import SaleCountDown from './SalesCountDown/SaleCountDown';
import Banner from './Banner/Banner';
import Subcribe from './Subcribe/Subcribe';
import React,{useState} from 'react';



const HomePage = ({products}) => {
    const [id,setId]=useState();
    const getCollectionID=(_id)=>{
        setId(_id);
    }

    return (
        <div>
            <Banner/>
            <SaleCountDown/>
            <div className="homepageContainer">
                {
                    products.map((product)=>(
                        <HomeCard key={product.id} product={product}/>
                    ))
                }
            </div>
            <Subcribe/>
            <Footer products={products}/>
        </div>
    );
}
 
export default HomePage;