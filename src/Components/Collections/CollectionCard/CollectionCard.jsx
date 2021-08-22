import React,{useState} from "react";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import { IconButton } from "@material-ui/core";

const CollectionCard = ({ product, handleAddToCart }) => {
  const classes = useStyles();
  const [color,setColor]=useState(product.variant_groups[0].options[0].id);
  const [size,setSize]=useState(product.variant_groups[1].options[0].id)
  const colorGroupId=product.variant_groups[0].id;
  const sizeGroupId=product.variant_groups[1].id;

  console.log("p",product);
  // console.log('color--->',color,colorGroupId,'size----->',size,sizeGroupId);
  

  const getColor=(i)=>{
    setColor(i)
    console.log('---color---',i)
  }
  const getSize=(j)=>{
    setSize(j)

  }

  return (
    <div className="collectioncard">
      <p>{product.inventory.avaliable}</p>
      <div className="collectionImgbx">
        <img src={product.media.source} alt="" />
      </div>
      <div className="productDetails">
        <div className="inventoryName">
          <h3>{product.name}</h3>
          
        </div>
        <div className="selectproperties">
          <div className="color">
            <span>color:</span>
            <ul className="colorlist">
              {product.variant_groups[0].options.map((colorBtn) => (
                <button key={colorBtn.id} className="sizeBtn" onClick={()=>getColor(colorBtn.id)}/>
              ))}
            </ul>
          </div>
          <div className="size">
            <span>size:</span>
            <div className="sizelist">
              {product.variant_groups[1].options.map((sizebtn) => (
                <button key={sizebtn.id} className="sizeBtn" onClick={()=>getSize(sizebtn.id)}>
                  {sizebtn.name}
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
            aria-label="add to cart"
            onClick={() => handleAddToCart(product.id, 1,color,colorGroupId,size,sizeGroupId)}
          >
            <AddShoppingCart />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
