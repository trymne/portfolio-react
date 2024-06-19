import React from "react";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
    logo: {
        color: "black",
        width: "fill-available",
        ":hover": {
            color: "var(--clr--purple)",
        },
    },
});

const InstagramLogo = () => {
    return (
        <svg {...stylex.props(styles.logo)} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24">
            <g fill="currentColor" id="Outlined">
                <path
                    d="M16,3H8C5.243,3,3,5.243,3,8v8c0,2.757,2.243,5,5,5h8c2.757,0,5-2.243,5-5V8C21,5.243,18.757,3,16,3z M19,16c0,1.654-1.346,3-3,3H8c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3h8c1.654,0,3,1.346,3,3V16z" />
                <path
                    d="M12,7c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5S14.757,7,12,7z M12,15c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3S13.654,15,12,15z" />
                <circle cx="17" cy="7" r="1" />
            </g>
        </svg>)
}

export default InstagramLogo;