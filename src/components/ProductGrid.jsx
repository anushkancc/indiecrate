import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, addToCart }) => {
  return (
    <div className="product-grid">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product._id} product={product} addToCart={addToCart} />
        ))
      ) : (
        <p className="no-results">No products found 😕</p>
      )}
    </div>
  );
};

export default ProductGrid;
