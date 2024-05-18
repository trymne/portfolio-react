import React from "react";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
    footer: {

    },
});

function Footer() {
    return (
        <footer {...stylex.props(styles.footer)}>
        </footer>
    );
}

export default Footer;