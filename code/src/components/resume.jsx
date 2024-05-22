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
        margin: "2em 0 0em",
    },
    resumeP: {
        maxWidth: "60ch",
        textAlign: "center",
    },
    resumeH2: {
        fontSize: "1.5em",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "10px 20px",
        alignItems: "start",
        width: "60%",
        maxWidth: "800px",
        margin: "0 auto",
        "@media (min-width: 600px) and (max-width: 1000px)": {
            width: "90%",
        },
        "@media (max-width: 600px)": {
            width: "95%",
        },
    },
    gridItem: {
        textAlign: "left",

    },
    gridDate: {
        fontWeight: "bold",
        color: "#333",
        minWidth: "15ch",
        "@media (max-width: 460px)": {
            maxWidth: "8ch",
            minWidth: "8ch",
        },
    },
    textRight: {
        textAlign: "right",
    },
    link: {
        fontWeight: "500",
        color: "var(clr--purple)",
        textDecoration: "none",
        ":hover": {
            textDecoration: "underline",
        },
        ":focus-visible": {
            textDecoration: "underline",
        },
    },

});

const AcademicSection = () => {
    return (
        <article {...stylex.props(styles.resumeSection)}>
            <h2 {...stylex.props(styles.resumeH2)}>Academic Contributions</h2>
            <div {...stylex.props(styles.grid)}>
                <span {...stylex.props(styles.gridDate, styles.textRight)}>05.2024:</span>
                <span {...stylex.props(styles.gridItem)}>The Use of Artificial Intelligence for Personalized Learning: Teacher Perspective </span>
                <span {...stylex.props(styles.gridDate, styles.textRight)}>07.2024:</span>
                <span {...stylex.props(styles.gridItem)}>The Effective Use of Generative AI for Personalized Learning: An Exploratory Study in the Norwegian Context</span>
            </div>
        </article>
    );
};

const EducationSection = () => {
    return (
        <article {...stylex.props(styles.resumeSection)}>
            <h2 {...stylex.props(styles.resumeH2)}>Education</h2>
            <div {...stylex.props(styles.grid)}>
                <span {...stylex.props(styles.gridDate)}>08.2021 - 06.2024:</span>
                <span {...stylex.props(styles.gridItem)}>Bachelor’s Degree in Web Development.</span>
                <span {...stylex.props(styles.gridDate)}>08.2015 - 06.2018:</span>
                <span {...stylex.props(styles.gridItem)}>Bachelor’s Degree in Physical Education and Sports Studies.</span>
                <span {...stylex.props(styles.gridDate)}>08.2014 - 07.2015:</span>
                <span {...stylex.props(styles.gridItem)}>The Armed Forces – Team Leader in the Radio Troop.</span>
                <span {...stylex.props(styles.gridDate)}>08.2011 - 06.2014:</span>
                <span {...stylex.props(styles.gridItem)}>Gausdal Upper Secondary School – Sports Studies, General Sports.</span>
            </div>
        </article>
    );
}

const ExperienceSection = () => {
    return (
        <article {...stylex.props(styles.resumeSection)}>
            <h2 {...stylex.props(styles.resumeH2)}>Work Experience</h2>
            <div {...stylex.props(styles.grid)}>
                <span {...stylex.props(styles.gridDate)}>08.2020 - 06.2021:</span>
                <span {...stylex.props(styles.gridItem)}>70% Substitute teacher at Smestad Junior High School.</span>
                <span {...stylex.props(styles.gridDate)}>03.2020 - 06.2020:</span>
                <span {...stylex.props(styles.gridItem)}>75% temporary position in physical education at Lillehammer Upper Secondary School, South Campus.</span>
                <span {...stylex.props(styles.gridDate)}>03.2019 - 03.2020:</span>
                <span {...stylex.props(styles.gridItem)}>Substitute teacher in physical education at Lillehammer Upper Secondary School, South Campus.</span>
                <span {...stylex.props(styles.gridDate)}>08.2018 - 08.2021:</span>
                <span {...stylex.props(styles.gridItem)}>Responsible for basic training at the Hamar Summer Ski School.</span>
                <span {...stylex.props(styles.gridDate)}>12.2017 - 09.2019:</span>
                <span {...stylex.props(styles.gridItem)}>Worked on the development, planning, and execution of <a {...stylex.props(styles.link)} href="https://www.skiforbundet.no/norges-skiforbund/nyheter/2022/2/nettsiden-utetimen/" target="_blank">Utetimen</a> (Outdoor Hour).</span>
                <span {...stylex.props(styles.gridDate)}>09.2015 - 02.2016:</span>
                <span {...stylex.props(styles.gridItem)}>Coordinator and Developer of "Try the Sport" Ski Jumping and Nordic Combined during the Youth Olympics Lillehammer 2016.</span>
                <span {...stylex.props(styles.gridDate)}>12.2005 – 12.2017:</span>
                <span {...stylex.props(styles.gridItem)}>World Cup in Ski Jumping, Cross-Country Skiing, and Alpine Skiing, Lillehammer: Various tasks.</span>
            </div>
        </article>
    );
};

const Resume = () => {


    return (
        <div {...stylex.props(styles.resumeContainer)}>
            <article {...stylex.props(styles.resumeSection)}>
                <h1 {...stylex.props(styles.resumeTitle)}>Resume</h1>
                <p {...stylex.props(styles.resumeP)} > Hello! I’m Trym, a newly graduated web developer with a robust background from a bachelor's degree in physical education and sports science. As a web developer, I am equally comfortable working on the front end as I am on the back end. I have a particular passion for problem-solving, which helps me navigate and devise solutions for complex challenges in the coding world.</p>
            </article>
            <AcademicSection />
            <EducationSection />
            <ExperienceSection />

        </div>
    );
}

export default Resume;