import React,{useState,useEffect} from "react";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import { IconButton } from "@material-ui/core";

const CollectionCard = ({ product, handleAddToCart }) => {
  const classes = useStyles();
  const [color,setColor]=useState(product.variant_groups[0].options[0]);
  const [size,setSize]=useState(product.variant_groups[1].options[0])
  const [variantColor,setVariantColor]=useState({})
  const [variantSize,setVariantSize]=useState({})

  console.log("c",product.variant_groups[0].id);
  console.log("s",product.variant_groups[1].id);
  // console.log('color--->',color,colorGroupId,'size----->',size,sizeGroupId);
  

  const getColor=(i)=>{
    setColor(product.variant_groups[0].options[i])
    setVariantColor({[product.variant_groups[0].id]:color})
    
  }
  const getSize=(j)=>{
    setSize(product.variant_groups[1].options[j])
    setVariantSize({[product.variant_groups[1].id]:size})
  }

  


  useEffect(() => {  
    const handleSize=()=>{
      setVariantSize({[product.variant_groups[1].id]:size})
    }
    const handleColor=()=>{
      setVariantColor({[product.variant_groups[0].id]:color})
    }
    handleSize();
    handleColor();
}, [color,size])


  console.log('color--->',color);
  console.log('size--->',size);
  console.log('variantColor--->',variantColor);
  console.log('variantSize--->',variantSize);




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
              {product.variant_groups[0].options.map((colorBtn,index) => (
                <button key={colorBtn.id} className="sizeBtn" onClick={()=>getColor(index)}/>
              ))}
            </ul>
          </div>
          <div className="size">
            <span>size:</span>
            <div className="sizelist">
              {product.variant_groups[1].options.map((sizebtn,index) => (
                <button key={sizebtn.id} className="sizeBtn" onClick={()=>getSize(index)}>
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
