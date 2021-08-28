import { Divider } from "@material-ui/core";
import HomeCard from "./Card/Card";
import SaleCountDown from "./SalesCountDown/SaleCountDown";
import Banner from "./Banner/Banner";
import React, { useState,useEffect } from "react";
import { commerce } from "../../lib/commerce";



const HomePage = ({getFilter,categories}) => {

// console.log("categories 2",categories)


/*
id:category.id
img:category.assets[0].url
name:category.name
number of products:category.products
*/


  if(!categories.length) return "Loading..."

  return (
    <div className="homepage">
      <Banner />
      <SaleCountDown />
      <div className="homepageContainer">
        {categories.map((category) => (
          <HomeCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
