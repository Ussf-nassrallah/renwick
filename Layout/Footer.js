import React from "react";
import styles from "../styles/Layout/Footer.module.scss";

// icons
import { MdLocationOn, MdPhone, MdEmail, MdSend } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Contact info */}
      <div className={styles.footerContainer}>
        <ul className={styles.footerContactInfo}>
          <li>
            <div className={styles.iconDiv}>
              <MdLocationOn />
            </div>

            <div>
              <h4>adresse</h4>
              <p>3139 route du houga 40880 Aire sur l'adour</p>
            </div>
          </li>

          <li>
            <div className={styles.iconDiv}>
              <MdPhone />
            </div>

            <div>
              <h4>phone</h4>
              <p>+212 4114 1524</p>
            </div>
          </li>

          <li>
            <div className={styles.iconDiv}>
              <MdEmail />
            </div>

            <div>
              <h4>email</h4>
              <p>renwick.shop@gmail.com</p>
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.footerContainer}>
        {/* foorm */}
        <form className={styles.footerForm}>
          <div>
            <label htmlFor="email" className={styles.footerFormLabel}>
              sign up for our monthly reports.
            </label>

            <div className={styles.footerFormInputDiv}>
              <div className={styles.icon}>
                <MdSend />
              </div>

              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className={styles.footerFormInput}
              />
            </div>
          </div>
        </form>

        <ul className={styles.footerLinks}>
          <li>shop</li>
          <li>gifts</li>
          <li>best sellers</li>
          <li>news</li>
          <li>packs</li>
        </ul>

        {/* Social media links */}
        <div>
          <h3>Social Media</h3>

          <ul className={styles.footerSocialLinks}>
            <li>
              <AiFillFacebook />
            </li>
            <li>
              <AiFillInstagram />
            </li>
            <li>
              <AiFillTwitterSquare />
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerContainer}>
        <p>Website By Youssef Nassrallah</p>
      </div>
    </footer>
  );
};

export default Footer;
