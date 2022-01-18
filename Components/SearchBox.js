import React from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import styles from "../styles/Components/SearchBox.module.scss";

const SearchBox = ({ input, setInput }) => {
    return (
        <div className={styles.search}>
            <div
                className={
                    input
                        ? `${styles.searchDiv} ${styles.searchDivOpen}`
                        : `${styles.searchDiv} ${styles.searchDivClose}`
                }
            >
                <div className={styles.searchIcon}>
                    <AiOutlineSearch />
                </div>

                <input
                    type="text"
                    placeholder="Search"
                    className={styles.searchDivInput}
                />

                <div
                    className={styles.closeIcon}
                    onClick={() => setInput(false)}
                >
                    <AiOutlineClose />
                </div>
            </div>

            <div
                className={
                    input
                        ? `${styles.searchOverlay} ${styles.searchOverlayShow}`
                        : `${styles.searchOverlay} ${styles.searchOverlayHide}`
                }
            ></div>
        </div>
    );
};

export default SearchBox;
