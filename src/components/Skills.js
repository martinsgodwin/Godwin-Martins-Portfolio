import '../styles/Skills.css';

function Skills() {
  const skillCategories = [
    {
      id: 1,
      category: 'Frontend',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 18.178l-4.62-1.256-.328-3.544h2.27l.158 1.844 2.52.667 2.52-.667.26-2.866H6.96l-.635-6.678h11.35l-.227 2.21H8.822l.204 2.256h8.126l-.654 7.034L12 18.178zM3 2h18l-1.623 18L12 22l-7.377-2L3 2zm2.188 2L6.49 18.434 12 19.928l5.51-1.494L18.812 4H5.188z"/>
        </svg>
      ),
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'JavaScript', level: 88 },
        { name: 'TypeScript', level: 75 },
        { name: 'HTML5 / CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
      ]
    },
    {
      id: 2,
      category: 'Tools & Platforms',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
        </svg>
      ),
      skills: [
        { name: 'Git & GitHub', level: 88 },
        { name: 'Vite', level: 85 },
        { name: 'VS Code', level: 95 },
        { name: 'Vercel / Netlify', level: 85 },
        { name: 'Figma', level: 70 },
        { name: 'npm / yarn', level: 88 },
      ]
    },
    {
      id: 3,
      category: 'Soft Skills',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      ),
      skills: [
        { name: 'Problem Solving', level: 92 },
        { name: 'Team Collaboration', level: 90 },
        { name: 'Communication', level: 85 },
        { name: 'Attention to Detail', level: 93 },
        { name: 'Time Management', level: 80 },
        { name: 'Quick Learner', level: 70 },
      ]
    }
  ];

  const techBadges = [
    'React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS',
    'Vite', 'Git', 'Figma', 'HTML', 'CSS', 'Vercel', 'REST APIs', 'Netlify'
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="skills-icon">
            <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
          </svg>
          My Skills
        </h2>

        <p className="skills-subtitle">Technologies and tools I work with</p>

        {/* Skill Categories with Progress Bars */}
        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.id} className="skill-category-card">
              <div className="category-header">
                <span className="category-icon">{cat.icon}</span>
                <h3>{cat.category}</h3>
              </div>
              <div className="skill-bars">
                {cat.skills.map((skill, index) => (
                  <div key={index} className="skill-bar-item">
                    <div className="skill-bar-label">
                      <span>{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{ '--fill-width': `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Badges */}
        <div className="tech-badges-section">
          <h3>Tech Stack</h3>
          <div className="tech-badges">
            {techBadges.map((tech, index) => (
              <span key={index} className="skill-tech-badge">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;