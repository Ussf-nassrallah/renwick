import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Components/Product.module.scss";

// icons
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import AddToCartBtn from "../Layout/AddToCartBtn";

export default function Product({ props }) {
    const { id, category, image, title, description, price, rating } = props;

    let productRating = Math.ceil(rating.rate);

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
        <div className={styles.product}>
            <p className={styles.category}>{category}</p>

            <Link href="/product/[id]" as={`/product/${id}`}>
                <Image
                    src={image}
                    objectFit="contain"
                    width={200}
                    height={200}
                    className={styles.img}
                />
            </Link>

            <h4 className={styles.title}>{title}</h4>

            {productRating === 5 && (
                <p className={styles.topp}>best seller #1</p>
            )}

            <div className={styles.rating}>{generateStars(productRating)}</div>

            <p className={styles.price}>$ {price}</p>

            <AddToCartBtn props={props} />
        </div>
    );
}
