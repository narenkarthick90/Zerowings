import facade2 from "../assets/images/facade2.png";

export default function About() {
  return (
    <div className="about-container">
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${facade2})` }}
      >
        <h1>About Zerowings Aerospace</h1>
        <p className="about-subtitle">
          Eliminating Human Risk in Hazardous Environments Through Intelligent
          Aerial Systems
        </p>
      </section>

      <section className="about-mission">
        <div className="about-content">
          <h2>Our Mission</h2>
          <p>
            Zerowings Aerospace is an early-stage deeptech startup building
            industrial-grade drones for high-risk jobs. Founded with the mission
            to eliminate human risk in hazardous environments, we engineer
            intelligent aerial systems that combine robust hardware, precision
            control, and mission adaptability to perform in extreme urban and
            industrial settings.
          </p>
          <p>
            Our vision is to become India's go-to provider for industrial drone
            automation—starting with infrastructure cleaning and expanding into
            multi-role applications. We're committed to reshaping how industries
            handle risky, repetitive, and dirty jobs—autonomously, affordably,
            and safely.
          </p>
        </div>
      </section>

      <section className="about-capabilities">
        <div className="about-content">
          <h2>Our Capabilities</h2>
          <p className="capabilities-intro">
            We specialize in high-risk industrial applications:
          </p>
          <div className="capabilities-grid">
            <div className="capability-card">
              <h3>🏢 High-Rise Facade Cleaning</h3>
              <p>
                Automated precision cleaning for skyscrapers and tall structures
              </p>
            </div>
            <div className="capability-card">
              <h3>⚙️ Windmill Maintenance</h3>
              <p>
                Safe inspection and maintenance of wind turbines in extreme
                conditions
              </p>
            </div>
            <div className="capability-card">
              <h3>🔧 Industrial Cleaning</h3>
              <p>
                Efficient large-scale industrial facility cleaning and surface
                treatment
              </p>
            </div>
            <div className="capability-card">
              <h3>🚒 Firefighting Support</h3>
              <p>
                Advanced aerial systems for firefighting operations and
                emergency response
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-prototype">
        <div className="about-content">
          <h2>Our Debut Prototype</h2>
          <p>
            Our flagship achievement—a high-rise window-cleaning drone—has
            successfully completed its first field pilot, showcasing remarkable
            performance in demanding conditions:
          </p>
          <div className="prototype-features">
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <div>
                <h4>Stable Flight in High-Wind Conditions</h4>
                <p>
                  Engineered for reliability in extreme weather environments
                </p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <div>
                <h4>10x Faster Precision Cleaning</h4>
                <p>
                  Significantly accelerates cleaning operations compared to
                  traditional methods
                </p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <div>
                <h4>Redundant Safety Features</h4>
                <p>
                  Multiple failsafes designed for safe operation near facades
                  and structures
                </p>
              </div>
            </div>
          </div>
          <p className="prototype-note">
            This marks a significant leap in automating tasks traditionally
            performed by manual rope-access teams, reducing risk while improving
            efficiency.
          </p>
        </div>
      </section>

      <section className="about-values">
        <div className="about-content">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>In-House Engineering</h3>
              <p>
                Complete control over design, manufacturing, and quality ensures
                optimal performance
              </p>
            </div>
            <div className="value-card">
              <h3>Cost-Effective Innovation</h3>
              <p>
                Building advanced solutions with affordable manufacturing and
                deployment strategies
              </p>
            </div>
            <div className="value-card">
              <h3>Safety First</h3>
              <p>
                Redundant systems and rigorous testing ensure operation in the
                most hazardous environments
              </p>
            </div>
            <div className="value-card">
              <h3>Regulatory Compliance</h3>
              <p>
                Full compliance with Indian drone regulations and international
                safety standards
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="about-content">
          <h2>Our Team</h2>
          <p>
            Zerowings Aerospace is backed by a passionate founding team of
            mechanical and software engineers dedicated to solving real-world
            industrial challenges through innovative drone technology. Our
            engineers bring expertise in robotics, autonomous systems, hardware
            design, and industrial automation.
          </p>
        </div>
      </section>

      <section className="about-presence">
        <div className="about-content">
          <h2>Our Presence</h2>
          <p>
            We are currently based in <strong>Chennai</strong>, with an
            operational presence at
            <strong> Maker Village, Kochi</strong>. We have begun actively
            engaging with early customers and investors as we prepare for scaled
            deployment across India and beyond.
          </p>
        </div>
      </section>

      <section className="about-cta">
        <h2>Join Us in Revolutionizing Industrial Automation</h2>
        <p>
          Be part of a mission to eliminate human risk in hazardous environments
        </p>
        <button className="cta-button">Explore Our Solutions</button>
      </section>
    </div>
  );
}
