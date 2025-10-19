import "../css/PromiseSection.css";

export default function PromiseSection() {
  return (
    <section className="promise-section">
      <h2 className="promise-heading">Our Promise to You</h2>
      <div className="promise-container">
        <div className="promise-card">
          <span className="promise-icon">🌿</span>
          <h3>100% Handmade</h3>
          <p>Every product is crafted with care by skilled artisans.</p>
        </div>

        <div className="promise-card">
          <span className="promise-icon">🚚</span>
          <h3>Fast Delivery</h3>
          <p>Reliable and quick shipping right to your doorstep.</p>
        </div>

        <div className="promise-card">
          <span className="promise-icon">🌱</span>
          <h3>Eco-Friendly</h3>
          <p>We use sustainable materials to protect our planet.</p>
        </div>

        <div className="promise-card">
          <span className="promise-icon">🤝</span>
          <h3>Supporting Artisans</h3>
          <p>Every purchase empowers local craft communities.</p>
        </div>
      </div>
    </section>
  );
}
