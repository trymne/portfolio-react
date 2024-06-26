import React, { useState } from 'react';
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
        color: 'rgb(137, 17, 161)',
        display: 'inline-block',
    },
    h1: {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: "15ch", // Added to prevent the span from breaking the line
        textAlign: 'center',
        fontSize: '2.5em',
        marginTop: '1.5em',
        "@media (max-width: 600px)": {
            textAlign: "start",
        },
    },
    aboutHook: {
    },
    img: {
        width: '100%',
        maxWidth: '8em',
        margin: '0 2em',
        transition: 'transform 0.5s',
    },
    topImgCont: {
        display: 'inline-block',
        justifyContent: 'center',
        overflow: 'hidden',
        marginTop: '1em',
        height: '8em',
    },
    imgIsHovered: {
        transform: 'translateY(4.5em)',
        transition: 'transform 0.5s',
    },
    titleFlex: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'baseline',
    },
});

const Landing = () => {
    const [imgIsHovered, setImgIsHovered] = useState(false);
    const [imgSrc, setImgSrc] = useState('/img/avatar-me.png');
    const [hoverTimer, setHoverTimer] = useState(null);

    const handleMouseEnter = () => {
        setImgIsHovered(true);
        const timer = setTimeout(() => {
            setImgSrc(currentSrc =>
                currentSrc === '/img/avatar-me.png' ? '/img/avatar-me-white.png' : '/img/avatar-me.png'

            );
        }, 500);
        setHoverTimer(timer);
    }

    const handleMouseLeave = () => {
        clearTimeout(hoverTimer);
        setImgIsHovered(false);
    }

    return (
        <main {...stylex.props(styles.mainStyle)}>
            <article {...stylex.props(styles.aboutArticle)}>
                <div id='about' {...stylex.props(styles.aboutHook)} ></div>
                <div {...stylex.props(styles.titleFlex)} >
                    <h1 {...stylex.props(styles.h1)} ><span {...stylex.props(styles.clrSpan)} >Heyo,&nbsp;</span> <span>I'm Trym</span></h1>
                    <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        {...stylex.props(styles.topImgCont)} ><img {...stylex.props(styles.img, imgIsHovered && styles.imgIsHovered)} src={imgSrc} alt='A cartoon avatar of me' /></div>
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
