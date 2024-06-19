import React from "react";
import * as stylex from "@stylexjs/stylex"

const styles = stylex.create({
    box: {
        width: 70,
        height: 70,
        padding: 0,
        color: "white",
        backgroundColor: "black",
        ':hover': {
            textDecoration: "underline",
        },
        ':focus-visible': {
            textDecoration: "underline",
        },
    },
    boxNr: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        margin: 0,
    },
    boxNrOpened: {
        fontSize: 12,
        margin: "-10px 0 0 0",
        textDecoration: "underline"

    },
    opened: {
        backgroundColor: "#f5f5f5",
        border: "1px solid black",
        color: "black",
        cursor: "not-allowed",
        gridAutoRows: "1fr 2fr",
    },
    slipNr: {
        fontSize: 22,
        margin: 0,
    },
    correct: {
        backgroundColor: "green",
        color: "white",
    },
})

const Box = ({ boxNr, slipNr, opened, clicked, currentPrisoner }) => {
    const handleClick = (boxNr, slipNr) => {
        if (!opened) {
            clicked(boxNr, slipNr);
        }
    };

    const isCurrentPrisoner = (currentPrisoner === slipNr) && opened;

    return (
        <button onClick={() => handleClick(boxNr, slipNr)} {...stylex.props(styles.box, opened && styles.opened, isCurrentPrisoner && styles.correct)}>
            <p {...stylex.props(styles.boxNr, opened && styles.boxNrOpened)}>{boxNr}</p>
            {opened && <p {...stylex.props(styles.slipNr)} >{slipNr}</p>
            }
        </button>
    );
}

export default Box;