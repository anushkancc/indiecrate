import "../css/Products.css"; // <-- correct import

export default function Products() {
  const products = [
    {
      image: "https://images.unsplash.com/photo-1681302183941-9e4520a960fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
      name: "Handwoven Bag",
      price: "₹899",
      discount: "15% OFF",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1679868096169-cf16fabcfc45?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600",
      name: "Clay Pot",
      price: "₹499",
      discount: "10% OFF",
    },
    {
      image: "https://media.istockphoto.com/id/483618415/photo/colorful-wooden-elephant-handmade-souvenir.webp?a=1&b=1&s=612x612&w=0&k=20&c=sheU1kS7lfmGeoAIyFYgxzkSCKZ5BnJ877zK0NHLWqM=",
      name: "Wooden Sculpture",
      price: "₹1299",
      discount: "20% OFF",
    },
    {
      image: "https://images.unsplash.com/photo-1622153060419-468f83a0f8f8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1138",
      name: "Handcrafted Basket",
      price: "₹699",
      discount: "5% OFF",
    },
  ];

  return (
    <section className="products">
      <h2>Featured Products</h2>
      <div className="product-container">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <p className="discount">{product.discount}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}
