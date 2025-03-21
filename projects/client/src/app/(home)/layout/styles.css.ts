import { style } from "@vanilla-extract/css";

const styles = {
    heading: style({
        fontSize: 40,
        fontWeight: 400,
        textAlign: "center"
    }),
    container: style({
        marginTop: 124,
        width: "100vh",
        display: "flex",
        justifyContent: "center"
    }),
    contentBox: style({
        width: "81%"
    }),
    characterText: style({
        width: 334,
        height: 163,
        display: "flex",
        alignItems: "center",
        margin: 0
    }),
    characterTextFirst: style({
        fontSize: 120,
        height: 163
    }),
    characterTextSecond: style({
        fontSize: 70,
        height: 95,
        marginTop: 40
    })
};

export default styles;
