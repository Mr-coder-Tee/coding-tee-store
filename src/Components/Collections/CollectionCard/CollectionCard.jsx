import React from "react";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

import codeworksdesign from "./codeworksdesign.jpeg";
import coffeedesign from "./coffeedesign.jpeg";
import javascriptdesign from "./javascriptdesign.jpeg";
import { IconButton } from "@material-ui/core";
const arr = [codeworksdesign, coffeedesign, javascriptdesign];

const CollectionCard = ({ product, handleAddToCart }) => {
  const classes = useStyles();
  // console.log("product----->",product);

  return (
    <div className="collectioncard">
      <div className="collectionImgbx">
        <img src={product.media.source} alt="" />
      </div>
      <div className="productDetails">
        <h3>{product.name}</h3>
        <div className="selectproperties">
          <div className="color">
            <span>color:</span>
            <ul className="colorlist">
              {product.variant_groups[0].options.map((size) => (
                <button key={size.id} className="sizeBtn" />
              ))}
            </ul>
          </div>
          <div className="size">
            <span>size:</span>
            <div className="sizelist">
              {product.variant_groups[1].options.map((size) => (
                <button key={size.id} className="sizeBtn">
                  {size.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="AddShoppingCart">
          <p>
            <strong>price:{product.price.formatted_with_symbol}</strong>
          </p>
          <IconButton
            class="addcart"
            onClick={() => handleAddToCart(product.id, 1)}
          >
            <AddShoppingCart />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
