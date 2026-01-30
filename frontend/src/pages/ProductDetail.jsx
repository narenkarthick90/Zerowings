import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "DJI Mini 3 Pro",
      category: "Compact",
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
      fullDescription:
        "The DJI Mini 3 Pro is the ultimate compact drone for creators. With its foldable design and powerful features, it's perfect for both beginners and professionals looking to capture stunning aerial footage.",
      warranty: "1 Year Manufacturer Warranty",
      dimensions: "138×171×202 mm",
      weight: "249g",
      camera: "4/3 CMOS Hasselblad Camera",
      videoResolution: "4K",
      flightTime: "47 minutes max",
    },
    {
      id: 2,
      name: "DJI Air 2S",
      category: "Professional",
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
      fullDescription:
        "The DJI Air 2S combines portability with professional-grade features. Its advanced 20MP Hasselblad camera and intelligent flight modes make it the ideal choice for creators who demand excellence.",
      warranty: "1 Year Manufacturer Warranty",
      dimensions: "183×253×77 mm",
      weight: "595g",
      camera: "1-inch Hasselblad Camera",
      videoResolution: "4K DCI",
      flightTime: "31 minutes max",
    },
    {
      id: 3,
      name: "DJI Mavic 3",
      category: "Premium",
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
      fullDescription:
        "The pinnacle of drone technology. DJI Mavic 3 features a revolutionary dual-camera system with 4K medium tele and 162mm tele, enabling cinematic possibilities never before possible.",
      warranty: "1 Year Manufacturer Warranty",
      dimensions: "221×298×86 mm",
      weight: "915g",
      camera: "Dual Camera System",
      videoResolution: "5.1K DCI",
      flightTime: "46 minutes max",
    },
    {
      id: 4,
      name: "DJI Avata 2",
      category: "Racing",
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
      fullDescription:
        "Experience extreme FPV racing with DJI Avata 2. With low-light vision capability and incredibly responsive flight, it's designed for speed and agility in any environment.",
      warranty: "1 Year Manufacturer Warranty",
      dimensions: "130×130×67 mm",
      weight: "410g",
      camera: "1/2-inch CMOS FPV Camera",
      videoResolution: "1080p",
      flightTime: "23 minutes max",
    },
    {
      id: 5,
      name: "DJI Phantom 4 Pro V2",
      category: "Professional",
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
      fullDescription:
        "Built for professionals. The DJI Phantom 4 Pro V2 delivers exceptional image quality with its 1-inch sensor and comprehensive obstacle sensing system.",
      warranty: "1 Year Manufacturer Warranty",
      dimensions: "350×242×242 mm",
      weight: "898g",
      camera: "1-inch Hasselblad Camera",
      videoResolution: "4K",
      flightTime: "30 minutes max",
    },
    {
      id: 6,
      name: "DJI Neo",
      category: "Beginner",
      price: 199,
      image: "🚁",
      description: "Ultra-compact entry-level drone for everyone",
      specs: ["135g", "17min flight time", "1080p video"],
      rating: 4.5,
      inStock: true,
      features: ["Ultra-Compact", "Palm-Size", "Quick Setup", "Easy to Fly"],
      fullDescription:
        "DJI Neo is the world's smallest and lightest DJI drone. Perfect for beginners, it's easy to fly and fits in your pocket.",
      warranty: "1 Year Manufacturer Warranty",
      dimensions: "81×55×48 mm",
      weight: "135g",
      camera: "1/2-inch Camera",
      videoResolution: "1080p",
      flightTime: "17 minutes max",
    },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-detail-container">
        <div className="error-section">
          <h1>Product Not Found</h1>
          <p>Sorry, we couldn't find the product you're looking for.</p>
          <button onClick={() => navigate("/products")} className="back-button">
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <button onClick={() => navigate("/products")} className="back-button">
        ← Back to Products
      </button>

      <section className="product-detail-hero">
        <div className="detail-image">
          <div className="detail-placeholder">{product.image}</div>
        </div>

        <div className="detail-info">
          <h1>{product.name}</h1>
          <div className="detail-rating">
            <span className="detail-stars">★★★★★</span>
            <span className="detail-rating-value">{product.rating}</span>
            <span className="detail-rating-text">(1,234 reviews)</span>
          </div>

          <p className="category-badge">{product.category}</p>

          <p className="full-description">{product.fullDescription}</p>

          <div className="price-section">
            <span className="detail-price">${product.price}</span>
            {product.inStock ? (
              <span className="in-stock">In Stock</span>
            ) : (
              <span className="out-of-stock-badge">Out of Stock</span>
            )}
          </div>

          <button
            className={`add-to-cart-button ${!product.inStock ? "disabled" : ""}`}
            disabled={!product.inStock}
          >
            {product.inStock ? "Add to Cart" : "Notify Me"}
          </button>

          <div className="quick-specs">
            <div className="quick-spec">
              <span className="spec-label">Weight:</span>
              <span className="spec-value">{product.weight}</span>
            </div>
            <div className="quick-spec">
              <span className="spec-label">Flight Time:</span>
              <span className="spec-value">{product.flightTime}</span>
            </div>
            <div className="quick-spec">
              <span className="spec-label">Video:</span>
              <span className="spec-value">{product.videoResolution}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="product-specs-section">
        <div className="specs-container">
          <div className="specs-column">
            <h2>Key Features</h2>
            <ul className="features-list">
              {product.features.map((feature, index) => (
                <li key={index}>
                  <span className="checkmark">✓</span> {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="specs-column">
            <h2>Technical Specifications</h2>
            <div className="tech-specs">
              <div className="tech-spec-row">
                <span className="spec-name">Dimensions:</span>
                <span className="spec-detail">{product.dimensions}</span>
              </div>
              <div className="tech-spec-row">
                <span className="spec-name">Weight:</span>
                <span className="spec-detail">{product.weight}</span>
              </div>
              <div className="tech-spec-row">
                <span className="spec-name">Camera:</span>
                <span className="spec-detail">{product.camera}</span>
              </div>
              <div className="tech-spec-row">
                <span className="spec-name">Video Resolution:</span>
                <span className="spec-detail">{product.videoResolution}</span>
              </div>
              <div className="tech-spec-row">
                <span className="spec-name">Max Flight Time:</span>
                <span className="spec-detail">{product.flightTime}</span>
              </div>
              <div className="tech-spec-row">
                <span className="spec-name">Warranty:</span>
                <span className="spec-detail">{product.warranty}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="related-products">
        <h2>Related Products</h2>
        <p>Check out our other drones in the {product.category} category</p>
        <button
          onClick={() => navigate("/products")}
          className="view-all-button"
        >
          View All Products
        </button>
      </section>
    </div>
  );
}
