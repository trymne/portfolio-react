import React from 'react';
import Projects from './Projects'; // Assuming Projects is in the same directory
import * as stylex from "@stylexjs/stylex";


const styles = stylex.create({
    mainStyle: {
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '5em',
    },
    aboutArticle: {
        width: '80%',
        maxWidth: '65ch',
        marginTop: '3em',
    },
    clrSpan: {
        color: 'rgb(137, 17, 161)', // Assuming direct usage, replace with a variable or a constant if needed
    },
});

const Landing = () => {
    return (
        <main {...stylex.props(styles.mainStyle)}>
            <article {...stylex.props(styles.aboutArticle)}>
                <h2><span {...stylex.props(styles.clrSpan)} >So,</span> who am I?</h2>
                <p>
                    I'm a passionate web developer who loves turning ideas into digital realities...
                </p>
                <p>
                    In my final year of a web development bachelor's program...
                </p>
                <p>
                    In my spare time, you'll find me pursuing my two greatest passions...
                </p>
            </article>

            <Projects /> {/* Rendering the Projects component */}

        </main>
    );
};

export default Landing;
