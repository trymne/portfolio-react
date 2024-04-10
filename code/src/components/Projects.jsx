import * as stylex from '@stylexjs/stylex';
import projectData from '../data/projectData';
import React from 'react';

const styles = stylex.create({
  projectsContainer: {
    width: '100%',
  },
  projectArticle: {
    minWidth: '100%',
    minHeight: '55vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '1em',
  },
  projectLink: {
    color: 'rgb(196, 55, 224)', // Assuming direct usage, replace with a variable or a constant if needed
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
    ':focus-visible': {
      textDecoration: 'underline',
    },
  },
  projectContent: {
    maxWidth: '80%',
    width: '60ch',
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  projectImage: {
    width: '100%',
    maxWidth: '900px',
  },
  tallImage: {
    width: '50%',
    maxWidth: '900px',
    height: 'auto',
  },
  // More styles...
});

const Projects = () => {
  return (
    <div {...stylex.props(styles.projectsContainer)} id="projects">
      <h2>Projects</h2>

      {projectData.map((project) => (
        <article key={project.id} {...stylex.props(styles.projectArticle)}>
          <h3>{project.title}</h3>
          <div {...stylex.props(styles.imgContainer)}>
            <img
              src={project.image}
              alt={project.alt}
              className={stylex(styles.projectImage)} // For className, use stylex() directly
            />
          </div>
          <p {...stylex.props(styles.projectContent)}>
            {project.description}
          </p>
          <div>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              {...stylex.props(styles.projectLink)} // Apply styles for links
            >
              GitHub
            </a>
            {' '}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              {...stylex.props(styles.projectLink)} // Reapply the same styles for the second link
            >
              Live Version
            </a>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Projects;
