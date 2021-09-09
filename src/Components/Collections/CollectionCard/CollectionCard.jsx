import React,{useState,useEffect} from "react";
import { AddShoppingCart, CollectionsBookmarkTwoTone,ArrowLeft,ArrowRight } from "@material-ui/icons";
import useStyles from "./styles";
import { IconButton,Dropdown } from "@material-ui/core";

const CollectionCard = ({ product, handleAddToCart }) => {
  const classes = useStyles();
  const [color,setColor]=useState(product.variant_groups[0].options[0].id);
  const [size,setSize]=useState(product.variant_groups[1].options[0].id)
  const [gender,setGender]=useState(product.variant_groups[2].options[0].id)

  const [c,setC]=useState(product.variant_groups[0].options[0].name);
  const [s,setS]=useState(product.variant_groups[1].options[0].name);
  const [g,setG]=useState(product.variant_groups[2].options[0].name);

  const [variant,setVariant]=useState({})
  const [sizeArr,setSizeArr]=useState([])

  const [image,setImage]=useState(product.assets[0].url);


  console.log("product",product)
   
  const getColor=(i)=>{
    setColor(product.variant_groups[0].options[i].id)
    setC(product.variant_groups[0].options[i].name)
    setImage(product.assets[i].url)
    
  }
  const getSize=(j)=>{
    setSize(product.variant_groups[1].options[j].id)
    setS(product.variant_groups[1].options[j].name)

  }
  const getGender=(k)=>{
    setGender(product.variant_groups[2].options[k].id)
    setG(product.variant_groups[2].options[k].name)
  }

  useEffect(() => {  
    const handleVariant=()=>{
      setVariant({[product.variant_groups[0].id]:color,[product.variant_groups[1].id]:size})
    }
    handleVariant();
  
}, [color,size])

  return (
    <div className="collectioncard">
      <div className="collectionImgbx">
        <img src={image} alt="" />
      </div>
      <div className="productDetails">
        <div className="inventoryName">
          <h3>{product.name}</h3>
          <h5 className="danger">{product.inventory.available+" left"}</h5>
        </div>
        <div className="selectproperties">
          <div className="color">
            <span>color:</span>
            <div className="colorlist">
              {product.variant_groups[0].options.map((colorBtn,index) => (
                
                <button key={colorBtn.id} className={`${colorBtn.name} sizeBtn ${c===colorBtn.name? 'activeBtn':colorBtn.name}`} onClick={()=>getColor(index)}/>
              
              ))}
            </div>
          </div>
          <div className="size">
            <span>size:</span>
            <div className="sizelist">
              {product.variant_groups[1].options.map((sizebtn,index) => (
                <button key={sizebtn.id} className={`transparet blackBorder sizeBtn ${s===sizebtn.name? 'activeBtn':"blackBorder"}` } onClick={()=>getSize(index)}>
                  {sizebtn.name}
                </button>

                // <div className="inputSelectSize" key={sizebtn.id}>
                //   <span>{sizebtn.name}</span>
                //   <input type="radio" onChange={()=>getSize(index)} value={sizebtn.name} name={product.variant_groups[1].id}/>
                // </div>
              ))}
              <div className="select"/>
            </div>
          </div>
          <div className="color">
            <span>Gender:</span>
            <div className="colorlist">
            <button className={`transparet blackBorder sizeBtn` } >
                  M
                </button>
            <button className={`transparet blackBorder sizeBtn` } >
                  F
                </button>
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
