import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="contact-container">
      <section className="contact-hero">
        <h1>Get In Touch</h1>
        <p className="contact-subtitle">We'd love to hear from you</p>
      </section>

      <section className="contact-content">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="info-group">
              <div className="info-item">
                <h3>📍 Address</h3>
                <p>123 Tech Street, Innovation City, TC 12345</p>
              </div>
              <div className="info-item">
                <h3>📧 Email</h3>
                <p>
                  <a href="mailto:info@zerowings.com">info@zerowings.com</a>
                </p>
                <p>
                  <a href="mailto:support@zerowings.com">
                    support@zerowings.com
                  </a>
                </p>
              </div>
              <div className="info-item">
                <h3>📞 Phone</h3>
                <p>
                  <a href="tel:+1234567890">+1 (234) 567-8900</a>
                </p>
              </div>
              <div className="info-item">
                <h3>⏰ Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send us a Message</h2>

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Message subject"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
                rows="6"
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
