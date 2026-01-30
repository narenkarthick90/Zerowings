export default function Demo() {
  const demoImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      type: "central",
      position: "center",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      type: "small",
      position: "top-left",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=350&h=350&fit=crop",
      type: "small",
      position: "top-right",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=380&h=300&fit=crop",
      type: "small",
      position: "bottom-left",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=420&h=320&fit=crop",
      type: "small",
      position: "bottom-right",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=360&h=280&fit=crop",
      type: "small",
      position: "left-middle",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=360&h=280&fit=crop",
      type: "small",
      position: "right-middle",
    },
  ];

  return (
    <div className="demo-container">
      <div className="demo-header">
        <h1>Our Work</h1>
        <p>Explore our innovative projects and team moments</p>
      </div>

      <div className="demo-collage">
        {demoImages.map((image) => (
          <div
            key={image.id}
            className={`demo-item ${image.type} ${image.position}`}
          >
            <img src={image.src} alt={`Demo ${image.id}`} />
            <div className="demo-item-overlay"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
