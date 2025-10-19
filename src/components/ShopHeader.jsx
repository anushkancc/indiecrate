import React from "react";

const ShopHeader = ({ searchTerm, setSearchTerm, category, setCategory }) => {
  return (
    <div className="shop-header">
      <h1>Shop Our Collection</h1>

      <div className="shop-controls">
        <input
          type="text"
          placeholder="Search products..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="filter-dropdown"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Bags">Bags</option>
          <option value="Jewelry">Jewelry</option>
          <option value="Home Decor">Home Decor</option>
          <option value="Pottery">Pottery</option>
          <option value="Clothing">Clothing</option>
        </select>
      </div>
    </div>
  );
};

export default ShopHeader;
