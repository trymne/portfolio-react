import React from "react";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
    footer: {
        backgroundColor: "#8a63d2",
        color: "#fff",
        padding: 20,
        textAlign: "center",
    },
});

function Footer() {
    return (
        <footer {...stylex.props(styles.footer)}>
            <p>
                Made with ❤️ by{" "}
            </p>
        </footer>
    );
}

export default Footer;