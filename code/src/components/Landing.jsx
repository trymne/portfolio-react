import React from 'react';
import Projects from './Projects'; // Assuming Projects is in the same directory
import * as stylex from "@stylexjs/stylex";


const styles = stylex.create({
    mainStyle: {
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '3em',
    },
    aboutArticle: {
        width: '80%',
        maxWidth: '65ch',
        marginTop: '3em',
    },
    clrSpan: {
        color: 'rgb(137, 17, 161)', // Assuming direct usage, replace with a variable or a constant if needed
    },
    h1: {
        display: 'inline-block',
        textAlign: 'center',
        fontSize: '2.5em',
        marginTop: '1.5em',
    },
    aboutHook: {
    },
    img: {
        width: '100%',
        maxWidth: '8em',
        margin: '0 2em',
    },
});

const Landing = () => {
    return (
        <main {...stylex.props(styles.mainStyle)}>
            <article {...stylex.props(styles.aboutArticle)}>
                <div id='about' {...stylex.props(styles.aboutHook)} ></div>
                <div>
                    <h1 {...stylex.props(styles.h1)} ><span {...stylex.props(styles.clrSpan)} >Heyo,</span> I'm Trym</h1>
                    <img {...stylex.props(styles.img)} src='/img/avatar-me.png' alt='A cartoon avatar of me' />
                </div>
                <p>
                    I'm a passionate web developer who loves turning ideas into digital realities. Since my early days, I've had a fascination with building things and a fascination for problem-solving. It's this combination of creativity and analytical thinking that led me down the path of web development.
                </p>
                <p>
                    In my final year of a web development bachelor's program, I've had the privilege of experimenting with both front-end and back-end technologies. I thrive on the opportunity to tackle diverse projects that challenge my logical and practical skills, whether it's creating engaging front-end user experiences or working on the technical aspects of server-side development. My specialization in JavaScript, CSS, databases, and APIs is a testament to my dedication to this ever-evolving field, and I'm always eager to expand my toolkit.
                </p>
                <p>
                    In my spare time, you'll find me pursuing my two greatest passions: exploring the great outdoors and staying updated on a wide array of sports. For me, the most rewarding aspect of being a web developer is witnessing the immediate results of my efforts, especially when I craft working solutions to complex problems.
                </p>
            </article>
            <div id='projects'></div>

            <Projects /> {/* Rendering the Projects component */}

        </main>
    );
};

export default Landing;
