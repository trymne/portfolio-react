import React, { useState, useEffect, useRef } from "react";
import * as stylex from "@stylexjs/stylex";
import { Link } from "react-router-dom";


// Define your styles here
const styles = stylex.create({
    nav: {
        borderBottom: '1px solid black',
        position: 'fixed',
        width: '100%',
        display: 'flex',
        alignItems: 'space-between',
        padding: '0.6em 0em 1em 0em',
        zIndex: 100,
        backgroundColor: 'var(--background)',
    },
    navHeader: {
        flex: 0.95,
        paddingLeft: '1rem',
    },
    navTitle: {
        fontSize: '1.3rem',
        cursor: 'pointer',
        textDecoration: 'none',
        fontWeight: 600,
        color: 'var(--text-color)',
        ":hover": {
            color: 'var(--clr--purple)',
        },
        ":focus-visible": {
            outline: '2px solid var(--clr--purple)',
            color: 'var(--clr--purple)',
        },
    },
    navList: {
        listStyleType: 'none',
        position: 'absolute',
        margin: 0,
        width: 'fit-content',
        fontSize: '1.3rem',
        top: '100%',
        right: 0,
        left: "auto",
        backgroundColor: 'var(--background)',
        display: 'none',
        '@media (min-width: 768px)': {
            position: 'static',
            display: 'flex',
            width: 'auto',
            backgroundColor: 'transparent',
        },
    },
    navListItem: {
        width: '100%',
        marginTop: '1.5rem',
    },
    navBtn: {
        display: 'inline-block',
        position: 'absolute',
        right: 0,
        top: 0,
        paddingTop: '0.2rem',
        "@media (min-width: 768px)": {
            display: "none",
        },
    },
    navBtnLabel: {
        display: 'inline-block',
        width: '50px',
        height: '50px',
        padding: '13px',
    },
    navBtnSpan: {
        display: 'block',
        width: '25px',
        height: '10px',
        borderTop: '2px solid var(--text-color)',
    },
    navLink: {
        fontWeight: 500,
        textDecoration: 'none',
        color: 'var(--text-color)',
        ':hover': {
            color: 'var(--clr--purple)',
        },
        ":focus-visible": {
            outline: '2px solid var(--clr--purple)',
            color: 'var(--clr--purple)',
        },
        '@media (min-width: 768px)': {
            margin: '0 1rem',
        },
    },
    hideNav: {
        display: "none",
    },
    showNav: {
        display: 'block',
        "@media (max-width: 768px)": {
            borderLeft: '1px solid var(--text-color)',
            borderBottom: '1px solid var(--text-color)',
            borderTop: "2px solid var(--background)",
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
        },
    },

});

const Header = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const handleResizeRef = useRef();

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    handleResizeRef.current = () => {
        setIsMobile(window.innerWidth < 768);
    };


    useEffect(() => {
        const eventListener = () => handleResizeRef.current();
        window.addEventListener('resize', eventListener);
        eventListener(); // Set initial state

        return () => {
            window.removeEventListener('resize', eventListener);
        };
    }, []);


    return (
        <header>
            <nav {...stylex.props(styles.nav)}>
                <input
                    type="checkbox"
                    id="nav-check"
                    checked={isNavOpen}
                    style={{ display: 'none' }} // Hide the actual checkbox
                />
                <div {...stylex.props(styles.navHeader)}>
                    <Link
                        to="/"
                        {...stylex.props(styles.navTitle)}>Home</Link>
                </div>
                <div {...stylex.props(styles.navBtn)} onClick={toggleNav}>
                    <label htmlFor="nav-check" {...stylex.props(styles.navBtnLabel)}>
                        <span {...stylex.props(styles.navBtnSpan)}></span>
                        <span {...stylex.props(styles.navBtnSpan)}></span>
                        <span {...stylex.props(styles.navBtnSpan)}></span>
                    </label>
                </div>
                <ul {...stylex.props(styles.navList, isNavOpen ? [styles.navList, styles.showNav] : [styles.navList])}>
                    <Link to="/projects/AI_tool" {...stylex.props(styles.navLink)}>AI tool</Link>
                    <Link to="/resume" {...stylex.props(styles.navLink)}>Resume</Link>
                    <Link to="/contact" {...stylex.props(styles.navLink)}>Contact</Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
