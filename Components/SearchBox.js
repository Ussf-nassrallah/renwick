import React from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import styles from "../styles/Components/SearchBox.module.scss";

const SearchBox = () => {
    return (
        <div className={styles.search}>
            <div className={styles.searchDiv}>
                <div className={styles.searchIcon}>
                    <AiOutlineSearch />
                </div>

                <input
                    type="text"
                    placeholder="Search"
                    className={styles.searchDivInput}
                />

                <div className={styles.closeIcon}>
                    <AiOutlineClose />
                </div>
            </div>

            <div className={styles.searchOverlay}></div>
        </div>
    );
};

export default SearchBox;
