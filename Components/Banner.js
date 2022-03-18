import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import PrimaryBtn from "../Layout/PrimaryBtn";
import styles from "../styles/Components/Banner.module.scss";

const Banner = () => {
   return (
      <div className={styles.banner}>
         <div className={styles.bannerContent}>
            <h1>All the gifts</h1>
            <p>It{" ' "}s officially that time and we have just the things</p>
            <PrimaryBtn
               value="Shop Now"
               icon={<IoMdArrowForward className="icon" />}
            />
         </div>
      </div>
   );
};

export default Banner;
