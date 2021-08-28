import React from "react";
import CollectionCard from "./CollectionCard/CollectionCard";
import { useParams } from "react-router";
import { HelpOutlineOutlined } from "@material-ui/icons";

const Collection = ({ products, handleAddToCart }) => {
  const { category: category } = useParams();

  /*
product.categories
*/

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
    <div className="collectionContainer">
      {category === "all" ? <ShowAll /> : <ShowByCartegory />}
    </div>
  );
};

export default Collection;
