import { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    type: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://formspree.io/f/mdajorkv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          rating,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setError(data?.errors?.[0]?.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setError(null);
    setRating(0);
    setFormData({ name: '', email: '', subject: '', type: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        <h2>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="contact-icon">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          Get In Touch
        </h2>

        <p className="contact-subtitle">Have a project in mind or just want to say hello? I'd love to hear from you.</p>

        <div className="contact-layout">

          {/* LEFT — Image + Contact Details */}
          <div className="contact-left">
            <div className="contact-image-wrapper">
              <img src="/me.png" alt="Godwin Martins" />
              <span className="availability-badge">
                <span className="availability-dot"></span>
                Available for work
              </span>
            </div>

            <div className="contact-details">
              <a href="mailto:your.email@example.com" className="contact-detail-item">
                <div className="detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className="detail-info">
                  <span className="detail-label">Email</span>
                  <span className="detail-value">martinsgodwin442@gmail.com</span>
                </div>
              </a>

              <a href="tel:+2340000000000" className="contact-detail-item">
                <div className="detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div className="detail-info">
                  <span className="detail-label">Phone</span>
                  <span className="detail-value">+234 907 160 2631</span>
                </div>
              </a>

              <div className="contact-detail-item">
                <div className="detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div className="detail-info">
                  <span className="detail-label">Location</span>
                  <span className="detail-value">Lagos, Nigeria</span>
                </div>
              </div>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-detail-item">
                <div className="detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.5v8.5h2.5v-4.34c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.34h2.5M6.5 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m-1 13.5h2.5V9h-2.5v12.5z"/>
                  </svg>
                </div>
                <div className="detail-info">
                  <span className="detail-label">LinkedIn</span>
                  <span className="detail-value">www.linkedin.com/in/godwin-martins-67597a396</span>
                </div>
              </a>

              <a href="https://github.com/Godwin-Martins" target="_blank" rel="noopener noreferrer" className="contact-detail-item">
                <div className="detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.544 2.914 1.186.092-.923.35-1.544.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                </div>
                <div className="detail-info">
                  <span className="detail-label">GitHub</span>
                  <span className="detail-value">github.com/Godwin-Martins</span>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT — Feedback / Contact Form */}
          <div className="contact-right">
            <div className="feedback-form-card">
              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h4>Message Sent!</h4>
                  <p>Thanks for reaching out. I'll get back to you as soon as possible.</p>
                  <button className="reset-btn" onClick={handleReset}>Send Another Message</button>
                </div>
              ) : (
                <>
                  <h3>Send a Message</h3>
                  <p>Fill out the form below and I'll respond within 24 hours.</p>

                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="type">Inquiry Type</label>
                        <select
                          id="type"
                          name="type"
                          value={formData.type}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled>Select type...</option>
                          <option value="project">Project Collaboration</option>
                          <option value="freelance">Freelance Work</option>
                          <option value="job">Job Opportunity</option>
                          <option value="feedback">General Feedback</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          placeholder="What's this about?"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Rate Your Experience</label>
                      <div className="rating-group">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            className={`star-btn ${star <= (hoveredStar || rating) ? 'active' : ''}`}
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoveredStar(star)}
                            onMouseLeave={() => setHoveredStar(0)}
                            aria-label={`Rate ${star} star`}
                          >
                            ★
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or just say hello..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {error && (
                      <div className="error-message">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                        </svg>
                        {error}
                      </div>
                    )}

                    <button type="submit" className="submit-btn" disabled={loading}>
                      {loading ? (
                        <>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ animation: 'spin 1s linear infinite' }}>
                            <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                          </svg>
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .error-message {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #e53e3e;
          background: #fff5f5;
          border: 1px solid #fed7d7;
          border-radius: 8px;
          padding: 10px 14px;
          font-size: 0.875rem;
          margin-bottom: 12px;
        }
      `}</style>
    </section>
  );
}

export default Contact;