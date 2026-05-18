import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'ItoSmart AI ',
      description: 'A cutting-edge AI-powered chatbot powered by Gemini API designed to provide intelligent and interactive conversations. Built with Next.JS and styled with Tailwind CSS, it offers a sleek and modern user interface for seamless interactions.',
      image: '/project1.jpg',
      techStack: ['Next.JS', 'Tailwind CSS', 'Typescript', 'API Integration'],
      liveLink: 'https://itosmart-iota.vercel.app/',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'OminiCart Shopping Cart',
      description: 'A sleek and user-friendly shopping cart application built with Next.JS and styled with Tailwind CSS. It features a modern design and smooth user experience for online shopping.',
      image: '/project2.jpg',
      techStack: ['Next.JS', 'Tailwind CSS', 'Typescript'],
      liveLink: 'https://ominicart-nine.vercel.app/',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'AlphaFlix Movie App',
      description: 'A movie discovery app that allows users to browse and search for movies. Built with React and styled with Tailwind CSS for a sleek, modern design.',
      image: '/project3.jpg',
      techStack: ['React.JS', 'Tailwind CSS', 'JavaScript'],
      liveLink: 'https://alphaflix.netlify.app/',
      githubLink: 'https://github.com/Godwin-Martins/Advanced-AlphaFlix'
    },
    {
      id: 4,
      title: 'Paul Ajayi Portfolio',
      description: 'A modern, responsive portfolio website showcasing Paul Ajayi\'s work and skills. Built with React for dynamic content and smooth animations.',
      image: '/project4.jpg',
      techStack: ['React', 'Vanilla CSS', 'Vite'],
      liveLink: 'https://ajayipaul.netlify.app/',
      githubLink: 'https://github.com/Godwin-Martins/Paul-Ajayi'
    },
    {
      id: 5,
      title: 'E & M Foundation Website',
      description: 'A website for a non-profit organization. Built with React for dynamic content and smooth animations.',
      image: '/project5.jpg',
      techStack: ['React', 'Vanilla CSS', 'Vite'],
      liveLink: 'https://esthermichealfoundation.netlify.app/',
      githubLink: 'https://github.com/Godwin-Martins/E-M'
    },
    {
      id: 6,
      title: 'Landing Page Demo',
      description: 'A modern landing page built with React and Tailwind CSS. It features a clean design and responsive layout for showcasing products or services.',
      image: '/project6.jpg',
      techStack: ['React', 'Tailwind CSS', 'Vite'],
      liveLink: 'https://landingpage442.netlify.app/',
      githubLink: 'https://github.com/Godwin-Martins/AlphaEstate'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="projects-icon">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
          My Projects
        </h2>

        <p className="projects-subtitle">Check out some of my recent work and projects</p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveLink} className="project-link" title="Live Demo">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                      </svg>
                    </a>
                    <a href={project.githubLink} className="project-link" title="GitHub">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.544 2.914 1.186.092-.923.35-1.544.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
