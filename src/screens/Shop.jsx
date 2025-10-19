import React, { useState } from "react";
import "../css/shop.css";
import ShopHeader from "../components/ShopHeader";
import ProductGrid from "../components/ProductGrid";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Shop = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const products = [
    { id: 1, name: "Handmade Tote Bag", price: 1200, discount: 20, category: "Bags", image: "https://images.unsplash.com/photo-1740733543156-e4b879e29076?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600" },
    { id: 2, name: "Wooden Sculpture", price: 800, discount: 15, category: "Home Decor", image: "https://images.unsplash.com/photo-1627830718668-7b51e4ad81be?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600" },
    { id: 3, name: "Clay Pot Large", price: 500, discount: 10, category: "Pottery", image: "https://plus.unsplash.com/premium_photo-1724094573983-39b59fb01772?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600" },
    { id: 4, name: "Beaded Necklace", price: 950, discount: 25, category: "Jewelry", image: "https://images.unsplash.com/photo-1638446518925-9645cedcb45c?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600" },
    { id: 5, name: "Jute Bag", price: 650, discount: 15, category: "Bags", image: "https://images.unsplash.com/photo-1494578151111-d35ec4c84e2b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1173" },
    { id: 6, name: "Painted Vase", price: 720, discount: 10, category: "Pottery", image: "https://images.unsplash.com/photo-1713990699109-bfa026db9d0e?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600" },
    { id: 7, name: "Bamboo Lamp", price: 1300, discount: 20, category: "Home Decor", image: "https://plus.unsplash.com/premium_photo-1664702603115-f7264eeec558?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600" },
    { id: 8, name: "Silver Earrings", price: 850, discount: 30, category: "Jewelry", image: "https://images.unsplash.com/photo-1758974504487-74d46fa07242?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600" },
    { id: 9, name: "Embroidered Kurti", price: 1600, discount: 15, category: "Clothing", image: "https://images.unsplash.com/photo-1760287363699-a08d553fb8a9?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600" },
    { id: 10, name: "Handwoven Shawl", price: 2200, discount: 20, category: "Clothing", image: "https://plus.unsplash.com/premium_photo-1725295197045-61b6912a3d5f?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600" },
    { id: 11, name: "Beaded Bracelet", price: 450, discount: 10, category: "Jewelry", image: "https://images.unsplash.com/photo-1643940527741-b004431d0707?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600" },
    { id: 12, name: "Clay Plate Set", price: 1100, discount: 25, category: "Pottery", image: "https://plus.unsplash.com/premium_photo-1666974578441-02b1c92a3ca3?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600" },
    { id: 13, name: "Cane Basket", price: 750, discount: 12, category: "Home Decor", image: "https://images.unsplash.com/photo-1654077774185-bd6c7331525a?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687" },
    { id: 14, name: "Boho Sling Bag", price: 1350, discount: 15, category: "Bags", image: "https://plus.unsplash.com/premium_photo-1718737640343-4b13d7c8d360?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170" },
    { id: 15, name: "Hand Carved Frame", price: 1800, discount: 20, category: "Home Decor", image: "https://plus.unsplash.com/premium_photo-1733342412407-9366e72bcbc3?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600" },
    { id: 16, name: "Pottery Mug Set", price: 950, discount: 10, category: "Pottery", image: "https://images.unsplash.com/photo-1490395957191-b50e5cc253fe?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600" },
    { id: 17, name: "Stone Pendant", price: 600, discount: 15, category: "Jewelry", image: "https://images.unsplash.com/photo-1741959964449-4646f67620c3?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600" },
    { id: 18, name: "Block Print Dress", price: 2400, discount: 18, category: "Clothing", image: "https://images.unsplash.com/photo-1760287364219-160c234ded00?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687" },
    { id: 19, name: "Printed Dupatta", price: 1300, discount: 10, category: "Clothing", image: "https://images.unsplash.com/photo-1609803384069-19f3e5a70e75?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600" },
    { id: 20, name: "Crochet Bag", price: 1150, discount: 20, category: "Bags", image: "https://images.unsplash.com/photo-1652009795426-3cfc824d4807?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600" },
  ];

  const filteredProducts = products.filter((product) => {
    const matchCategory = category === "All" || product.category === category;
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
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