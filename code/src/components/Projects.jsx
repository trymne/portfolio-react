import * as stylex from '@stylexjs/stylex';
import projectData from '../data/projectData';
import React from 'react';
import './segmentDisplay.js'

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
  projectTitle: {
    marginBottom: '0.5em',
    marginTop: '2em',
    fontSize: '2em',
    textAlign: 'center',
  },
  darkBG: {
    backgroundColor: '#1e2334;',
    color: '#f5f5f5',
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
  linkCont: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1em',
    gap: '1em',
  },
  imgTall: {
    height: 'auto',
    width: '50%',
    maxWidth: '900px',
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
          <h3>{project.title}</h3>
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
                  size="60"
                  text="!#msdD"
                  sgClr="white"
                  bgClr="red"
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


          {/* LINK*/}
          <div {...stylex.props(styles.linkCont)}>
            {project.githubUrl && <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              {...stylex.props(styles.projectLink)} // Apply styles for links
            >
              GitHub
            </a>}
            {project.liveUrl &&
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                {...stylex.props(styles.projectLink)} // Reapply the same styles for the second link
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
