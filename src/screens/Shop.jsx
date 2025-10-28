import React, { useState, useEffect } from "react";
import "../css/shop.css";
import ShopHeader from "../components/ShopHeader";
import ProductGrid from "../components/ProductGrid";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Shop = ({ addToCart }) => {
  const [products, setProducts] = useState([]); // will store products from backend
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  // ✅ Fetch products from your backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // ✅ Filter logic
  const filteredProducts = products.filter((product) => {
    const matchCategory = category === "All" || product.category === category;
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
      <NavBar />
      <section className="shop-container">
        <ShopHeader
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          category={category}
          setCategory={setCategory}
        />
        <ProductGrid products={filteredProducts} addToCart={addToCart} />
      </section>
      <Footer />
    </>
  );
};

export default Shop;
