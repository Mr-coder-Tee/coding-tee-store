import React from 'react';
import {productCollect} from './CollectionCard/data'

import CollectionCard from './CollectionCard/CollectionCard';


const Collection = ({products}) => {
    return ( 
            <div className="collectionContainer">
                {
                    products.map((product)=>(
                        <div key={product.id}>
                            <CollectionCard product={product} />
                        </div>
                    ))
                }
            </div> 
        );
}
  
export default Collection;