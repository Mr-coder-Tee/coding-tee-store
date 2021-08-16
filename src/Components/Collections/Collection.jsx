import React from 'react';
import {productCollect} from './CollectionCard/data'

import CollectionCard from './CollectionCard/CollectionCard';

const collection=productCollect;

console.log("collection",collection);

const Collection = () => {
    return ( 
            <div className="collectionContainer">
                {
                    collection.map((product)=>(
                        <CollectionCard key={product.id} product={product} />
                    ))
                }
            </div> 
        );
}
 
export default Collection;