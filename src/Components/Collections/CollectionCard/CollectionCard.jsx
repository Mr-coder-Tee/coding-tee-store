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

  const [image,setImage]=useState(product.assets[0].url);
  const [productImgs,setProductImgs]=useState([])
  const [Imgindex,setImgIndex]=useState(0);


   
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
  const right=()=>{
    if(Imgindex+1>=productImgs.length){
      setImgIndex(0)
    }else{
      setImgIndex(Imgindex+1)
    }
    setImage(productImgs[Imgindex])

  }
  const left=()=>{
    if(Imgindex-1<0){
      setImgIndex(productImgs.length-1)
    }else{
      setImgIndex(Imgindex-1)
    }
    setImage(productImgs[Imgindex])

  }

 
  
  useEffect(()=>{
    setImage(productImgs[Imgindex])
    // console.log(product.id,'->image:',image)

  },[Imgindex])

  useEffect(() => {  
    const handleVariant=()=>{
      setVariant({[product.variant_groups[0].id]:color,[product.variant_groups[1].id]:size,[product.variant_groups[2].id]:gender,})
    }
    const handleImgs=()=>{
      let imgbx=[]
      product.assets.map((img)=>(
        imgbx.push(img.url)
      ))
      setProductImgs(imgbx)
    }
    handleImgs();
    handleVariant();
  
}, [color,size])


  return (
    <div className="collectioncard">
      <div className="collectionImgbx">
        <img src={image} alt="" />
        <IconButton
            class="arrow arrow-left"
            aria-label="add to cart"
            onClick={() => left()}
          >
            <ArrowLeft />
          </IconButton>
          <IconButton
            class="arrow arrow-right"
            aria-label="add to cart"
            onClick={() => right()}
          >
            <ArrowRight />
          </IconButton>
          <div className="imgCircles">


          {
            productImgs.map((nums,index)=>(
              <div key={index} className={`circle ${index===Imgindex?'Imgaction':'circle'}`}>
              </div>
            ))
          }
          </div>
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

          <div className="genderdiv">
            <span>Gender:</span>
            <div className="colorlist">
            {
              product.variant_groups[2].options.map((genderbtn,index)=>(
                <button key={genderbtn.id} className={`transparet blackBorder sizeBtn ${g===genderbtn.name? 'activeBtn':"blackBorder"}`} onClick={()=>getGender(index)}>
                  {genderbtn.name}
                </button>
              ))
            }
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
