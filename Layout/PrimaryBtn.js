import React from "react";
import Link from "next/link";
import styles from "../styles/Layout/PrimaryBtn.module.scss";

const PrimaryBtn = ({ value, icon }) => {
  return (
    <Link href="/Products">
      <button className={styles.btnPrimary}>
        {value}
        <span className={styles.icon}>{icon}</span>
      </button>
    </Link>
  );
};

export default PrimaryBtn;
