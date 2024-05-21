import React from "react";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
    resumeContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
    },
    resumeSection: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: "1em",
    },
    resumeTitle: {
        fontSize: "2em",
        margin: "1em",
    },
    resumeContent: {
        maxWidth: "60ch",
        textAlign: "center",
    },
    resumeLink: {
        color: "rgb(196, 55, 224)",
        textDecoration: "none",
        height: "fit-content",
        ":hover": {
            textDecoration: "underline",
        },
        ":focus-visible": {
            textDecoration: "underline",
        },
    },
});

const Resume = () => {


    return (
        <div {...stylex.props(styles.resumeContainer)}>
            <article {...stylex.props(styles.resumeSection)}>
                <h1 {...stylex.props(styles.resumeTitle)}>Resume</h1>
                <p {...stylex.props(styles.resumeContent)}>
                    You can download my resume{" "}
                    <a
                        {...stylex.props(styles.resumeLink)}
                        href="https://drive.google.com/file/d/1j3mLZB1h3c2o4B5Jv3t8gZ2YvZl3F6YK/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                    >
                        here
                    </a>
                    .
                </p>
            </article>
        </div>
    );
}

export default Resume;