import React from 'react';
import {productCollect} from './CollectionCard/data'

import CollectionCard from './CollectionCard/CollectionCard';


const Collection = ({products,handleAddToCart}) => {
    return ( 
            <div className="collectionContainer">
                {
                    products.map((product)=>(
                        <div key={product.id}>
                            <CollectionCard product={product} handleAddToCart={handleAddToCart} />
                        </div>
                    ))
                }
            </div> 
        );
}
  
export default Collection;