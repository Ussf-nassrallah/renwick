import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "../styles/ProductsPage.module.scss";

export default function Products({ products }) {
    let s = new Set();

    for (let index = 0; index < products.length; index++) {
        s.add(products[index].category);
    }

    const categories = Array.from(s);

    const filterProducts = (category) =>
        products.filter((product) => product.category === category);

    return (
        <section className={styles.productsPage}>
            {/* Filter Panel */}
            <div className={styles.productsSidebar}>
                <div className={styles.search}>
                    <div className={styles.searchIcon}>
                        <AiOutlineSearch className={styles.icon} />
                    </div>
                    <input
                        type="text"
                        className={styles.searchInput}
                        placeholder="Search By Keyword"
                    />
                </div>

                <div className={styles.inputGroup}>
                    <p className={styles.inputGroupLabel}>Categories</p>
                    {categories.map((category, index) => (
                        <div key={index} className={styles.inputGroupElement}>
                            <label htmlFor={category}>
                                {category}{" "}
                                <span>
                                    {`(${filterProducts(category).length})`}
                                </span>
                            </label>
                            <input type="checkbox" name={category} />
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.productsContainer}>Products</div>
        </section>
    );
}

export const getStaticProps = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    return {
        props: {
            products: data,
        },
    };
};
