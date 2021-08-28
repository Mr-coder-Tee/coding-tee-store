import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';



const HomeCard = ({category}) => {

    return ( 
        <div className="homecard">
            <div className="imgbx">
                <img src={category.assets[0].url} alt={category.name} />
            </div>
            <div className="btnLabel">
                <h3 className="title">{category.name}</h3>
                <Button component={Link} to={"/collection/"+category.id}  class="btnView">View Collection</Button>
            </div>
            <div className="blackColor"/>
        </div> );
}
 
export default HomeCard;