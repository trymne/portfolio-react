import React, { useState, useEffect, useRef } from 'react';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
    cont: {
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
    },
    img: {
        width: '50px',
        height: '50px',
    },
    div: {
        position: 'absolute',
        bottom: '35px',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '5px 10px',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '5px',
        fontSize: '14px',
        whiteSpace: 'nowrap',
    }
});

const TechIcon = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const iconRef = useRef(null);

    // Manage hover for desktop users
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    // Toggle visibility on click for mobile users
    const handleToggleVisibility = () => {
        setIsClicked(!isClicked);
    };

    // Handle click outside to hide tooltip on mobile
    const handleClickOutside = (event) => {
        if (iconRef.current && !iconRef.current.contains(event.target)) {
            setIsClicked(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Determine tooltip visibility based on hover or click
    const showTooltip = isHovered || isClicked;

    return (
        <div
            ref={iconRef}
            {...stylex.props(styles.cont)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleToggleVisibility}
        >
            <img {...stylex.props(styles.img)} src={`/img/${item.icon}`} alt={item.name} />
            {showTooltip && <div {...stylex.props(styles.div)}>{item.name}</div>}
        </div>
    );
};

export default TechIcon;