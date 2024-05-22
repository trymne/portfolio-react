import React from "react";
import * as stylex from "@stylexjs/stylex";

const CONTACT_LINKS = [
    { name: "GitHub", url: "https://github.com/trymne" },
    { name: "Instagram", url: "https://www.instagram.com/trymnerem/" },
    { name: "LinkedIn", url: "https://linkedin.com" },
];

const styles = stylex.create({
    contactContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
    },
    contactSection: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: "1em",
    },
    contactTitle: {
        fontSize: "2em",
        margin: "2em 0 0em",
    },
    contactP: {
        maxWidth: "60ch",
        textAlign: "center",
    },
    contactH2: {
        fontSize: "1.5em",
        margin: "1em 0 0 0",
    },
    link: {
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
    logo: {
        margin: "1em 0 0.5em",
        color: "black",
        width: "80px",
        "@media (max-width: 700px)": {
            width: "60px",
        },
    },
    logoHovered: {
        color: "var(--link-dark)",
    },
    logoLink: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    logoCont: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginTop: "0.3em",
        gap: "3em",
        "@media (max-width: 700px)": {
            gap: "2em",
        },
    },
    logoTitle: {
        fontSize: "1.2em",
        textAlign: "center",
        color: "black",
        margin: "0",
        "@media (max-width: 700px)": {
            fontSize: "1em",
        },
    },
});

const SocialLink = ({ name, IconComponent, hovered, setHovered }) => {
    const link = CONTACT_LINKS.find((link) => link.name === name).url;
    return (
        <a
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setHovered(true)}
            onBlur={() => setHovered(false)}
            {...stylex.props(styles.logoLink)}
            href={link}
            target="_blank"
            aria-label={`Visit my ${name} profile`}
        >
            <IconComponent color={hovered ? "var(--link-dark)" : "black"} {...stylex.props(styles.logo)} />
            <h3 {...stylex.props(styles.logoTitle, hovered && styles.logoHovered)}>{name}</h3>
        </a>
    );
}

const Contact = () => {


    const [hovered, setHovered] = React.useState({ github: false, instagram: false, linkedin: false });


    return (
        <div {...stylex.props(styles.contactContainer)}>
            <section {...stylex.props(styles.contactSection)}>
                <h1 {...stylex.props(styles.contactTitle)}>Contact</h1>
                <p {...stylex.props(styles.contactP)}>
                    If you would like to get in touch, please feel free to reach out to me via email at{" "}
                    <a href="mailto:trym.nerem@hotmail.com" {...stylex.props(styles.link)}>trym.nerem@hotmail.com</a>.
                </p>
                <h2 {...stylex.props(styles.contactH2)}>Or find me on social media:</h2>
                <div {...stylex.props(styles.logoCont)}>
                    {['GitHub', 'Instagram', 'LinkedIn'].map((social) => (
                        <SocialLink
                            key={social}
                            name={social}
                            IconComponent={social === 'GitHub' ? GithubLogo : social === 'Instagram' ? InstagramLogo : LinkedInLogo}
                            hovered={hovered[social.toLowerCase()]}
                            setHovered={(val) => setHovered({ ...hovered, [social.toLowerCase()]: val })}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};


const GithubLogo = ({ color }) => {
    return (
        <svg {...stylex.props(styles.logo)} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0,0,256,256">
            <g fill={color} fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt"
                strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0"
                fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                <g transform="scale(5.12,5.12)">
                    <path
                        d="M17.791,46.836c0.711,-0.306 1.209,-1.013 1.209,-1.836v-5.4c0,-0.197 0.016,-0.402 0.041,-0.61c-0.014,0.004 -0.027,0.007 -0.041,0.01c0,0 -3,0 -3.6,0c-1.5,0 -2.8,-0.6 -3.4,-1.8c-0.7,-1.3 -1,-3.5 -2.8,-4.7c-0.3,-0.2 -0.1,-0.5 0.5,-0.5c0.6,0.1 1.9,0.9 2.7,2c0.9,1.1 1.8,2 3.4,2c2.487,0 3.82,-0.125 4.622,-0.555c0.934,-1.389 2.227,-2.445 3.578,-2.445v-0.025c-5.668,-0.182 -9.289,-2.066 -10.975,-4.975c-3.665,0.042 -6.856,0.405 -8.677,0.707c-0.058,-0.327 -0.108,-0.656 -0.151,-0.987c1.797,-0.296 4.843,-0.647 8.345,-0.714c-0.112,-0.276 -0.209,-0.559 -0.291,-0.849c-3.511,-0.178 -6.541,-0.039 -8.187,0.097c-0.02,-0.332 -0.047,-0.663 -0.051,-0.999c1.649,-0.135 4.597,-0.27 8.018,-0.111c-0.079,-0.5 -0.13,-1.011 -0.13,-1.543c0,-1.7 0.6,-3.5 1.7,-5c-0.5,-1.7 -1.2,-5.3 0.2,-6.6c2.7,0 4.6,1.3 5.5,2.1c1.699,-0.701 3.599,-1.101 5.699,-1.101c2.1,0 4,0.4 5.6,1.1c0.9,-0.8 2.8,-2.1 5.5,-2.1c1.5,1.4 0.7,5 0.2,6.6c1.1,1.5 1.7,3.2 1.6,5c0,0.484 -0.045,0.951 -0.11,1.409c3.499,-0.172 6.527,-0.034 8.204,0.102c-0.002,0.337 -0.033,0.666 -0.051,0.999c-1.671,-0.138 -4.775,-0.28 -8.359,-0.089c-0.089,0.336 -0.197,0.663 -0.325,0.98c3.546,0.046 6.665,0.389 8.548,0.689c-0.043,0.332 -0.093,0.661 -0.151,0.987c-1.912,-0.306 -5.171,-0.664 -8.879,-0.682c-1.665,2.878 -5.22,4.755 -10.777,4.974v0.031c2.6,0 5,3.9 5,6.6v5.4c0,0.823 0.498,1.53 1.209,1.836c9.161,-3.032 15.791,-11.672 15.791,-21.836c0,-12.682 -10.317,-23 -23,-23c-12.683,0 -23,10.318 -23,23c0,10.164 6.63,18.804 15.791,21.836z"></path>
                </g>
            </g>
        </svg>
    );
};

const LinkedInLogo = ({ color }) => {
    return (
        <svg {...stylex.props(styles.logo)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path fill={color}
                d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
        </svg>
    )
}

const InstagramLogo = ({ color }) => {
    return (
        <svg {...stylex.props(styles.logo)} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24">
            <g fill={color} id="Outlined">
                <path
                    d="M16,3H8C5.243,3,3,5.243,3,8v8c0,2.757,2.243,5,5,5h8c2.757,0,5-2.243,5-5V8C21,5.243,18.757,3,16,3z M19,16c0,1.654-1.346,3-3,3H8c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3h8c1.654,0,3,1.346,3,3V16z" />
                <path
                    d="M12,7c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5S14.757,7,12,7z M12,15c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3S13.654,15,12,15z" />
                <circle cx="17" cy="7" r="1" />
            </g>
        </svg>)
}


export default Contact;