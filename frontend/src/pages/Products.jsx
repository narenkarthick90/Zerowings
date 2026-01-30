import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "DJI Mini 3 Pro",
      category: "Recreation",
      price: 749,
      image: "🚁",
      description:
        "Lightweight and powerful, perfect for beginners and professionals",
      specs: ["249g", "47min flight time", "4K video"],
      rating: 4.8,
      inStock: true,
      features: [
        "Foldable design",
        "Intelligent Flight Modes",
        "Extended Flight Time",
      ],
    },
    {
      id: 2,
      name: "DJI Air 2S",
      category: "Filming",
      price: 999,
      image: "🚁",
      description: "Advanced features for demanding creative projects",
      specs: ["595g", "31min flight time", "20MP Hasselblad camera"],
      rating: 4.9,
      inStock: true,
      features: [
        "Hasselblad Camera",
        "Advanced Obstacle Avoidance",
        "Max Video",
        "4K HDR",
      ],
    },
    {
      id: 3,
      name: "DJI Mavic 3",
      category: "Filming",
      price: 1999,
      image: "🚁",
      description: "Ultimate cinematic drone with exceptional capabilities",
      specs: ["915g", "46min flight time", "Dual camera system"],
      rating: 5,
      inStock: false,
      features: [
        "Dual Camera System",
        "4/3 CMOS Sensor",
        "Telephoto Lens",
        "Pro Cine",
      ],
    },
    {
      id: 4,
      name: "DJI Avata 2",
      category: "FPV",
      price: 599,
      image: "🚁",
      description: "Immersive FPV racing experience with low-light vision",
      specs: ["410g", "23min flight time", "1080p FPV camera"],
      rating: 4.7,
      inStock: true,
      features: [
        "Low-Light Vision",
        "FPV Experience",
        "Quick Reactions",
        "Goggles Ready",
      ],
    },
    {
      id: 5,
      name: "DJI Phantom 4 Pro V2",
      category: "Payload",
      price: 1449,
      image: "🚁",
      description: "Enterprise-grade drone for commercial applications",
      specs: ["898g", "30min flight time", "1 inch Hasselblad camera"],
      rating: 4.6,
      inStock: true,
      features: [
        "1 inch Sensor",
        "5-Direction Obstacle Sensing",
        "RAW Photography",
        "Pro Features",
      ],
    },
    {
      id: 6,
      name: "DJI Neo",
      category: "Recreation",
      price: 199,
      image: "🚁",
      description: "Ultra-compact entry-level drone for everyone",
      specs: ["135g", "17min flight time", "1080p video"],
      rating: 4.5,
      inStock: true,
      features: ["Ultra-Compact", "Palm-Size", "Quick Setup", "Easy to Fly"],
    },
  ];

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === "All" || product.category === selectedCategory,
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="products-container">
      <section className="products-hero">
        <h1>Our Products</h1>
        <p className="products-subtitle">
          Discover our complete range of innovative drones
        </p>
      </section>

      <section className="products-filters">
        <div className="filters-wrapper">
          <div className="filter-group">
            <label>Category:</label>
            <div className="category-buttons">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-button ${
                    selectedCategory === category ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <label>Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="name">Name (A-Z)</option>
              <option value="price-low">Price (Low to High)</option>
              <option value="price-high">Price (High to Low)</option>
              <option value="rating">Rating (Highest)</option>
            </select>
          </div>
        </div>
        <p className="products-count">
          Showing {sortedProducts.length} product
          {sortedProducts.length !== 1 ? "s" : ""}
        </p>
      </section>

      <section className="products-grid">
        <div className="products-content">
          {sortedProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <div className="product-placeholder">{product.image}</div>
                {!product.inStock && (
                  <div className="out-of-stock">Out of Stock</div>
                )}
                <span className="product-badge">{product.category}</span>
              </div>
              <div className="product-info">
                <div className="product-header">
                  <h3>{product.name}</h3>
                  <div className="product-rating">
                    <span className="stars">★★★★★</span>
                    <span className="rating-value">{product.rating}</span>
                  </div>
                </div>

                <p className="product-description">{product.description}</p>

                <div className="product-features">
                  {product.features.map((feature, index) => (
                    <span key={index} className="feature-tag">
                      ✓ {feature}
                    </span>
                  ))}
                </div>

                <div className="product-specs">
                  {product.specs.map((spec, index) => (
                    <span key={index} className="spec-tag">
                      {spec}
                    </span>
                  ))}
                </div>

                <div className="product-footer">
                  <span className="product-price">${product.price}</span>
                  <button
                    className={`product-button ${!product.inStock ? "disabled" : ""}`}
                    disabled={!product.inStock}
                    onClick={() => navigate(`/products/${product.id}`)}
                  >
                    {product.inStock ? "View Details" : "Notify Me"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="products-comparison">
        <div className="comparison-content">
          <h2>Compare Models</h2>
          <p>
            Want help choosing? Check our comparison guide to find the perfect
            drone for your needs.
          </p>
          <button className="comparison-button">View Comparison Table</button>
        </div>
      </section>

      <section className="products-cta">
        <h2>Still Not Sure?</h2>
        <p>
          Our expert team is here to help you find the right drone for your
          needs
        </p>
        <button className="contact-cta-button">Contact Our Team</button>
      </section>
    </div>
  );
}
