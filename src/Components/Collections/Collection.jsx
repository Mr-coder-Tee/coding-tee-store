import React, { useEffect, useState } from "react";
import CollectionCard from "./CollectionCard/CollectionCard";
import { useParams } from "react-router";
import { HelpOutlineOutlined } from "@material-ui/icons";
import { commerce } from "../../lib/commerce";
// import { animateScroll } from "react-scroll";
// import { animateTopScroll } from "react-scroll/modules/mixins/animate-scroll";
import {useWindowScroll} from 'react-use'



const Collection = ({ products, handleAddToCart }) => {
  const { category: category } = useParams();
  const [heading, setHeading] = useState("");

  const getHeading = async () => {
    if (category === "all") {
      setHeading("ALL");
    } else {
      const  data  = await commerce.categories.retrieve(category);
      console.log("data",data)
      setHeading(data.name);
    }
  };
  const scrollToTop=()=>window.scrollTo({top:0,behavior:"smooth"})

  useEffect(() => {
    getHeading();
    scrollToTop();
  }, []);

  const ShowAll = () => (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <CollectionCard product={product} handleAddToCart={handleAddToCart} />
        </div>
      ))}
    </>
  );
  const ShowByCartegory = () => (
    <>
      {products.map((product) =>
        product.categories
          .filter((c) => c.id === category)
          .map((cat) => (
            <div key={product.id}>
              <CollectionCard
                product={product}
                handleAddToCart={handleAddToCart}
              />
            </div>
          ))
      )}
    </>
  );

  return (
    <div className="collectinMainContainer">
      <div className="collectionHeader">
        <h2>Category:{" " + heading}</h2>
      </div>
      <div className="collectionContainer">
        {category === "all" ? <ShowAll /> : <ShowByCartegory />}
      </div>
    </div>
  );
};

export default Collection;
