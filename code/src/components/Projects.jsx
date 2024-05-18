import * as stylex from '@stylexjs/stylex';
import projectData from '../data/projectData';
import React from 'react';
import TechIcon from './TechIcon.jsx';
import './segmentDisplay.js'
import { Link } from 'react-router-dom';

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
    height: 'fit-content',
    ':hover': {
      textDecoration: 'underline',
    },
    ':focus-visible': {
      textDecoration: 'underline',
    },
  },
  projectTitle: {
    marginBottom: '0.5em',
    marginTop: '2em',
    fontSize: '2em',
    textAlign: 'center',
    '@media (max-width: 600px)': {
      fontSize: '1.5em', // Smaller font size on smaller screens
    },
  },
  darkBG: {
    backgroundColor: '#1e2334;',
    color: '#f5f5f5',
  },
  projectContent: {
    maxWidth: '80%',
    width: '60ch',
    '@media (max-width: 600px)': {
      width: '90%', // More width in smaller screens
      maxWidth: 'none',
    },
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  projectImage: {
    width: '100%',
    maxWidth: '900px',
    '@media (max-width: 600px)': {
      maxWidth: '100%',
    },
  },
  tallImage: {
    width: '50%',
    maxWidth: '900px',
    height: 'auto',
    '@media (max-width: 600px)': {
      width: '700%',
    },
  },
  linkCont: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1em',
    gap: '1em',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      gap: '0.5em',
    },
  },
  imgTall: {
    height: 'auto',
    width: '50%',
    maxWidth: '900px',
  },
  h3: {
    fontSize: '1.5em',
  },
  techList: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1em',
    marginTop: '1em',
  },
  // More styles...
});

const Projects = () => {
  const [sgmntText, setSgmntText] = React.useState('');
  const [doChange, setDoChange] = React.useState('');

  const handleSgmntText = (e) => {
    e.preventDefault();
    setSgmntText(doChange);
  };

  const formChange = (e) => {
    setDoChange(e.target.value);
  }

  console.log('sgmntText', sgmntText)

  return (
    <div {...stylex.props(styles.projectsContainer)} >
      <h2 {...stylex.props(styles.projectTitle)} >Projects</h2>

      {projectData.map((project, index) => (
        <article key={project.id} {...stylex.props(styles.projectArticle, index % 2 === 0 && styles.darkBG)}>
          <h3 {...stylex.props(styles.h3)} >{project.title}</h3>
          <div {...stylex.props(styles.imgContainer)}>
            {/*----------IMAGE------*/}
            {project.image && <img
              src={project.image}
              alt={project.alt}
              {...stylex.props(styles.projectImage, project.imgTall && styles.imgTall)} // For className, use stylex() directly
            />}
            {project.sgmnt &&
              <>
                <sgmnt-display
                  size="20px"
                  text="!#ms"
                  sgClr="#F5F5F5"
                  bgClr="#1e2334"
                  dayVersion=""
                ></sgmnt-display>

              </>
            }
          </div>
          <p {...stylex.props(styles.projectContent)}>
            {project.description}
          </p>
          <p {...stylex.props(styles.projectContent)} dangerouslySetInnerHTML={{ __html: project.deschtml }} >
          </p>

          {/* TECHNOLOGIES*/
            project.technologies &&
            <div {...stylex.props(styles.techList)}>
              {project.technologies.map((item, index) => (
                <TechIcon key={index} item={item} />
              ))}
            </div>
          }


          {/* LINK*/}
          <div {...stylex.props(styles.linkCont)}>
            {project.githubUrl && <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              id='project' // For className, use stylex() directly
            >
              GitHub
            </a>}
            <Link to={`/projects/${project.link}`} id="project" > Read more</Link>
            {project.liveUrl &&
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                id='project'// Reapply the same styles for the second link
              >
                Live Version
              </a>}
          </div>
        </article>
      ))}
    </div>
  );
};

export default Projects;

