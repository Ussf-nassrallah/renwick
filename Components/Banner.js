// import React from "react";
// import styles from "../styles/Components/Banner.module.scss";
// // Icons
// import { IoMdArrowForward } from "react-icons/io";
// import PrimaryBtn from "../Layout/PrimaryBtn";

// export default function Banner() {
//     return (
//         <div className={styles.banner}>
//             <div className={styles.bannerContent}>
//                 <h1>All the gifts</h1>
//                 <p>It's officially that time and we have just the things</p>
//                 <PrimaryBtn
//                     value="the holiday edit"
//                     icon={<IoMdArrowForward className="icon" />}
//                 />
//             </div>
//         </div>
//     );
// }

import React from "react";
import styles from "../styles/Components/Banner.module.scss";
// Icons
import { IoMdArrowForward } from "react-icons/io";
import PrimaryBtn from "../Layout/PrimaryBtn";

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.bannerContent}>
                <h1>All the gifts</h1>
                <p>It's officially that time and we have just the things</p>
                <PrimaryBtn
                    value="the holiday edit"
                    icon={<IoMdArrowForward className="icon" />}
                />
            </div>
        </div>
    );
};

export default Banner;
