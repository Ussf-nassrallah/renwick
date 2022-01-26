import React, { useState } from "react";
import Image from "next/image";
import Logo from "../Assets/logo.png";
import { AiOutlineClose } from "react-icons/ai";
import styles from "../styles/Components/Modal.module.scss";

const Modal = () => {
    const [modal, setModal] = useState(false);

    setTimeout(() => {
        setModal(true);
    }, 5000);

    return (
        <div
            className={
                modal
                    ? `${styles.modal} ${styles.showModal}`
                    : `${styles.modal} ${styles.hideModal}`
            }
        >
            <div className={styles.modalContainer}>
                <div className={styles.imgDiv}>
                    <Image src={Logo} objectFit="contain" />
                </div>
                <h2>get $10 off your first renwick Purchase</h2>
                <p>and we'll let you know when renwick launches</p>

                <div
                    className={styles.closeIcon}
                    onClick={() => setModal(false)}
                >
                    <AiOutlineClose />
                </div>

                <form className={styles.modalContainerForm}>
                    <input type="email" placeholder="Enter Your Email" />
                    <button type="submit">Get Access</button>
                </form>
            </div>

            <div className={styles.modalOverlay}></div>
        </div>
    );
};

export default Modal;
