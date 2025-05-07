import React, { useRef, useState, useEffect } from "react";
import "./Contact.css";

export default function FeedbackForm() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", feedback: "" });

  // IntersectionObserver toggles visibility
  useEffect(() => {
    const el = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("Thanks for your feedback!");
    setFormData({ name: "", email: "", feedback: "" });
  };

  return (
    <section
      id="feedback"
      className={`feedback-wrapper ${visible ? "fade-in" : "hidden"}`}
      ref={sectionRef}
    >
      <h2 className="feedback-title">Share Your Feedback</h2>
      <p className="feedback-desc">We’d love to hear what you think!</p>

      <div className={`feedback-container ${visible ? "open" : "collapsed"}`}>
        <form className="feedback-form" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="feedback"
            rows="5"
            placeholder="Your Feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Feedback</button>
        </form>
      </div>
    </section>
  );
}
