import React from "react";
import styles from "../styles/Layout/PrimaryBtn.module.scss";

const PrimaryBtn = ({ value, icon }) => {
    return (
        <button className={styles.btnPrimary}>
            {value}
            {icon}
        </button>
    );
};

export default PrimaryBtn;
