import '../styles/About.css';

function About() {
  const experiences = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Tech Company',
      period: '2023 - Present',
      description: 'Building responsive web applications with React and modern web technologies.'
    },
    {
      id: 2,
      title: 'Junior Developer',
      company: 'Startup Inc',
      period: '2022 - 2023',
      description: 'Developed and maintained web applications with focus on user experience.'
    }
  ];

  const testimonials = [
    {
      id: 1,
      text: 'Godwin is an exceptional developer with great attention to detail and problem-solving skills.',
      author: 'John Doe',
      role: 'Project Manager',
      image: '/avatar1.jpg'
    },
    {
      id: 2,
      text: 'Amazing to work with! Godwin delivered outstanding results and exceeded expectations.',
      author: 'Jane Smith',
      role: 'CEO',
      image: '/avatar2.jpg'
    },
    {
      id: 3,
      text: 'Highly recommended. Godwin brings creativity and technical excellence to every project.',
      author: 'Mike Johnson',
      role: 'Lead Designer',
      image: '/avatar3.jpg'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="about-icon">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
          About Me
        </h2>

        {/* Bio Section */}
        <div className="about-section bio-section">
          <h3>Who I Am</h3>
          <p>I'm a passionate Frontend Developer with a keen eye for design and a love for clean, efficient code. With expertise in React, JavaScript, and modern CSS frameworks, I create beautiful digital experiences that users love. I believe in the power of technology to solve real-world problems and make people's lives easier.</p>
          <p>When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or sharing knowledge with the developer community.</p>
        </div>

        {/* Experience Section */}
        <div className="about-section experience-section">
          <h3>Experience</h3>
          <div className="experience-list">
            {experiences.map((exp) => (
              <div key={exp.id} className="experience-item">
                <div className="experience-header">
                  <h4>{exp.title}</h4>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-description">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="about-section testimonials-section">
          <h3>What People Say</h3>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <p className="author-name">{testimonial.author}</p>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
