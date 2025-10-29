import "../css/Products.css"; // correct import

export default function Products() {
  const products = [
    {
      image:
        "https://images.unsplash.com/photo-1681302183941-9e4520a960fb?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=880",
      name: "Handwoven Bag",
      description:
        "A beautifully handwoven bag crafted from natural fibers. Perfect for everyday use.",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1679868096169-cf16fabcfc45?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
      name: "Clay Pot",
      description:
        "A traditional clay pot, great for decorative use or for storing small plants.",
    },
    {
      image:
        "https://media.istockphoto.com/id/483618415/photo/colorful-wooden-elephant-handmade-souvenir.webp?a=1&b=1&s=612x612&w=0&k=20&c=sheU1kS7lfmGeoAIyFYgxzkSCKZ5BnJ877zK0NHLWqM=",
      name: "Wooden Sculpture",
      description:
        "Intricately carved wooden elephant sculpture representing strength and wisdom.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1622153060419-468f83a0f8f8?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1138",
      name: "Handcrafted Basket",
      description:
        "A stylish and eco-friendly basket handwoven by local artisans.",
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
            <p className="description">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
