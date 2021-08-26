import React,{useState,useEffect} from "react";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import { IconButton } from "@material-ui/core";

const CollectionCard = ({ product, handleAddToCart }) => {
  const classes = useStyles();
  const [color,setColor]=useState(product.variant_groups[0].options[0].id);
  const [size,setSize]=useState(product.variant_groups[1].options[0].id)
  const [variant,setVariant]=useState({})

  // console.log("c",product.variant_groups[0].id);
  // console.log("s",product.variant_groups[1].id);
  // console.log('color--->',color,colorGroupId,'size----->',size,sizeGroupId);
  

  const getColor=(i)=>{
    setColor(product.variant_groups[0].options[i].id)

    
  }
  const getSize=(j)=>{
    setSize(product.variant_groups[1].options[j].id)

  }

  


  useEffect(() => {  
    const handleVariant=()=>{
      setVariant({[product.variant_groups[0].id]:color,[product.variant_groups[1].id]:size})
    }
    handleVariant();
  
}, [color,size])


  console.log('color--->',color);
  console.log('size--->',size);
  console.log('variant--->',variant);
 




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
                // <button key={sizebtn.id} className="sizeBtn" onClick={()=>getSize(index)}>
                //   {sizebtn.name}
                // </button>

                <div className="inputSelectSize" key={sizebtn.id}>
                  <span>{sizebtn.name}</span>
                  <input type="radio" onChange={()=>getSize(index)} value={sizebtn.name} name={product.variant_groups[1].id}/>
                </div>
              ))}
              <div className="select"/>
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
            onClick={() => handleAddToCart(product.id, 1,variant)}
          >
            <AddShoppingCart />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
