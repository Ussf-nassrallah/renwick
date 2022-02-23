import React from "react";
import Image from "next/image";
// icons
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
// Components
import AddToCartBtn from "../../../Layout/AddToCartBtn";
// Styles
import styles from "../../../styles/ProductDetails.module.scss";

function singleProduct({ product }) {
    let productRating = Math.ceil(product.rating.rate);

    const generateStars = (stars) => {
        if (stars > 5 || stars < 0) {
            return ["An error occured !"];
        }

        let output = [];

        for (let i = 0; i < stars; i++) {
            output.push(<AiFillStar className={styles.icon} />);
        }

        for (let i = stars; i < 5; i++) {
            output.push(<AiOutlineStar className={styles.icon} />);
        }

        return output;
    };

    return (
        <>
            <div className={styles.flex}>
                <Image
                    src={product.image}
                    objectFit="contain"
                    width={500}
                    height={500}
                />

                <div className={styles.info}>
                    <h2 className={styles.infoTitle}>{product.title}</h2>

                    <p className={styles.infoPrice}>$ {product.price}</p>

                    {productRating === 5 && (
                        <p className={styles.topp}>best seller #1</p>
                    )}

                    <div className={styles.infoRating}>
                        <div className={styles.infoRatingRate}>
                            {generateStars(productRating)}
                        </div>

                        <p className={styles.infoRatingCount}>
                            {"(" + product.rating.count + ")"}
                        </p>
                    </div>

                    <span>Details</span>

                    <p className={styles.infoDesc}>{product.description}</p>

                    <div>
                        <AddToCartBtn props={product} />
                    </div>
                </div>
            </div>
        </>
    );
}

export const getServerSideProps = async (context) => {
    const res = await fetch(
        `https://fakestoreapi.com/products/${context.params.id}`
    );

    const product = await res.json();

    return {
        props: {
            product,
        },
    };
};

export default singleProduct;
