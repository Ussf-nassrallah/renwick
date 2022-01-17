import React from "react";
import styles from "../styles/Layout/PrimaryBtn.module.scss";

const PrimaryBtn = ({ value, icon }) => {
    return (
        <button className={styles.btnPrimary}>
            {value}
            <span className={styles.icon}>{icon}</span>
        </button>
    );
};

export default PrimaryBtn;
