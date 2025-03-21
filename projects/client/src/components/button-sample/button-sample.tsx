"use client";

import { ReactNode, MouseEventHandler } from "react";
import styles from "./style.css";

interface props {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const ButtonSample = (props: props) => {
    return <button className={styles.container} {...props} />;
};
