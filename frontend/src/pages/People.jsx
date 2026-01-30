import "./People.css";

export default function People() {
  const founders = [
    {
      id: 1,
      name: "Alex Chen",
      role: "Co-Founder & CEO",
      description:
        "Former aerospace engineer with 10+ years in drone systems design",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      social: { linkedin: "#", github: "#" },
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Co-Founder & CTO",
      description:
        "Software architect specialized in autonomous systems and AI",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      social: { linkedin: "#", github: "#" },
    },
  ];

  const interns = [
    {
      id: 1,
      name: "James Rodriguez",
      role: "Avionics Intern",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Emma Davis",
      role: "Software Intern",
      image:
        "https://images.unsplash.com/photo-1517849845537-1d51a20414de?w=300&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Mechanical Intern",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    },
    {
      id: 4,
      name: "Lisa Anderson",
      role: "Electrical Intern",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    },
    {
      id: 5,
      name: "David Park",
      role: "Firmware Intern",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop",
    },
    {
      id: 6,
      name: "Sophie Turner",
      role: "Design Intern",
      image:
        "https://images.unsplash.com/photo-1517849845537-1d51a20414de?w=300&h=300&fit=crop",
    },
    {
      id: 7,
      name: "Chris Martinez",
      role: "Operations Intern",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
    },
    {
      id: 8,
      name: "Nina Patel",
      role: "Business Development Intern",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    },
    {
      id: 9,
      name: "Oliver Schmidt",
      role: "Research Intern",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    },
  ];

  return (
    <div className="people-container">
      {/* Decorative background elements */}
      <div className="people-bg-decoration people-bg-decoration--top-left"></div>
      <div className="people-bg-decoration people-bg-decoration--top-right"></div>
      <div className="people-bg-decoration people-bg-decoration--bottom-left"></div>

      {/* Header Section */}
      <header className="people-header">
        <div className="people-header-content">
          <h1 className="people-header-title">Meet Our Team</h1>
          <p className="people-header-subtitle">
            The brilliant minds behind ZeroWings Aerospace pushing the
            boundaries of innovation
          </p>
        </div>
      </header>

      {/* Founders Section */}
      <section className="founders-section">
        <div className="section-header">
          <h2 className="section-title">Founders</h2>
          <div className="section-divider"></div>
        </div>
        <div className="founders-grid">
          {founders.map((founder) => (
            <article key={founder.id} className="founder-card">
              <div className="founder-card-image-wrapper">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="founder-card-image"
                  loading="lazy"
                />
              </div>
              <div className="founder-card-content">
                <h3 className="founder-name">{founder.name}</h3>
                <p className="founder-role">{founder.role}</p>
                <p className="founder-description">{founder.description}</p>
                <nav
                  className="founder-social-links"
                  aria-label="Social profiles"
                >
                  <a
                    href={founder.social.linkedin}
                    className="founder-social-icon founder-social-icon--linkedin"
                    aria-label={`${founder.name} on LinkedIn`}
                    title="LinkedIn"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.048-8.814 0-9.737h3.554v1.379l-.022.033h.022v-.033c.43-.664 1.199-1.61 2.920-1.61 2.134 0 3.733 1.394 3.733 4.391v5.577zM5.337 9.341c-1.144 0-1.915-.758-1.915-1.707 0-.955.771-1.707 1.964-1.707 1.192 0 1.915.752 1.938 1.707 0 .949-.746 1.707-1.987 1.707zm1.582 11.111H3.635V8.616h3.284v11.836zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </a>
                  <a
                    href={founder.social.github}
                    className="founder-social-icon founder-social-icon--github"
                    aria-label={`${founder.name} on GitHub`}
                    title="GitHub"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </nav>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Interns Section */}
      <section className="interns-section">
        <div className="section-header">
          <h2 className="section-title">Our Team</h2>
          <div className="section-divider"></div>
        </div>
        <div className="interns-grid">
          {interns.map((intern) => (
            <article key={intern.id} className="intern-card">
              <div className="intern-card-image-wrapper">
                <img
                  src={intern.image}
                  alt={intern.name}
                  className="intern-card-image"
                  loading="lazy"
                />
              </div>
              <div className="intern-card-content">
                <h3 className="intern-name">{intern.name}</h3>
                <p className="intern-role">{intern.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
