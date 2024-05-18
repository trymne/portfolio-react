import React from 'react';
import { useParams } from 'react-router-dom';
import projectData from '../data/projectData';
import TechIcon from './TechIcon.jsx';
import * as stylex from '@stylexjs/stylex';
import './segmentDisplay.js'




const styles = stylex.create({
    h1: {
        fontSize: '3em',
        textAlign: 'center',
        margin: '1em',
        '@media (max-width: 600px)': {
            fontSize: '2em',
            margin: "1.5em"
        },
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0.4em',
        '@media (max-width: 600px)': {
            padding: '0 10px',
        },
    },
    sgmnt: {
        margin: '0.5em',
        '@media (max-width: 600px)': {
            margin: '0.3em',
        },
    },
    h2: {
        fontSize: '2em',
        textAlign: 'center',
        marginBottom: '0.5em',
        '@media (max-width: 600px)': {
            fontSize: '1.5em',
        },
    },
    article: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    p: {
        textAlign: 'center',
        maxWidth: '60ch',
        '@media (max-width: 600px)': {
            maxWidth: '90%', // Use more of the screen width on small devices
            fontSize: '1em', // Optionally adjust font size for readability
        },
    },
    code: {
        maxWidth: '60ch',
        textAlign: 'center',
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
    },

});

const CodeDisplay = ({ code }) => {
    // Split the code at each logical break point
    const parts = code.split(' '); // Split by spaces, or choose a better delimiter based on your needs

    return (
        <div {...stylex.props(styles.center)}>
            <pre {...stylex.props(styles.code)}>
                {parts.map((part, index) => (
                    <React.Fragment key={index}>
                        {part}
                        {(index < parts.length - 1) ? ' ' : ''}
                        {part.endsWith("'") && <wbr />}
                    </React.Fragment>
                ))}
            </pre>
        </div>
    );
};

const bgClr = '#F5F5F5';
const sgClr = 'rgb(196, 55, 224)';


function OneProject() {
    let { projectName } = useParams();
    const project = projectData.find((project) => project.link === projectName);
    let name;
    if (!project) {
        name = 'not-found';
    }

    if (project) {
        name = project.title;
    }


    return (
        <article {...stylex.props(styles.article)}>
            <h1 {...stylex.props(styles.h1)}>{name}</h1>
            {project.sgmnt &&
                <sgmnt-display
                    size="20"
                    text="!#m"
                    sgClr="rgb(196, 55, 224)"
                    bgClr="#F5F5F5"></sgmnt-display>
            }

            {project.intro ?
                <p {...stylex.props(styles.p)}>{project.intro}</p>
                : <p {...stylex.props(styles.p)} dangerouslySetInnerHTML={{ __html: project.d_intro }} ></p>
            }

            {project.detailed.map((item, index) => {
                return (
                    <article {...stylex.props(styles.section)}>
                        {item.h2 && <h2 {...stylex.props(styles.h2)} >{item.h2}</h2>}
                        {item.p && <p {...stylex.props(styles.p)} >{item.p}</p>}
                        {item.sgmnt &&
                            <div {...stylex.props(styles.sgmnt)}>
                                <sgmnt-display
                                    size="20px"
                                    text={item.sgmnt}
                                    sgClr={sgClr}
                                    bgClr={bgClr}
                                >
                                </sgmnt-display>
                            </div>
                        }
                        {item.code && <CodeDisplay code={item.code} />}
                        {item.img && <img src={item.img} alt={item.alt} />}
                    </article>
                );
            }
            )}

            {/*Technologies*/}
            {project.technologies.map((item, index) => {
                return (
                    <TechIcon key={index} item={item} />
                );
            })}

        </article>
    );
}

export default OneProject;


