import React, { useState, useEffect, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Product from "../Components/Product";
import styles from "../styles/ProductsPage.module.scss";

export default function Products({ products }) {
    const [input, setInput] = useState("");
    const [checked, setChecked] = useState(false);
    const [value, setValue] = useState("");
    const [searchProducts, setSearchProducts] = useState([]);

    let s = new Set();

    for (let index = 0; index < products.length; index++) {
        s.add(products[index].category);
    }

    const categories = Array.from(s);

    // filter products by categories
    const filterProducts = (category) =>
        products.filter((product) => product.category === category);

    // filter products by keywords
    const filterProductsbyStr = (str) =>
        products.filter((product) => product.title.includes(str));

    useEffect(() => {
        setSearchProducts(filterProductsbyStr(input));
    }, [input, products]);

    const checkboxRef = useRef();

    const save = () => console.log(checkboxRef.current.checked);

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
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
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

                            <input
                                type="checkbox"
                                name={category}
                                ref={checkboxRef}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.productsContainer}>
                <header>
                    <h2>Search results for “{input}”</h2>
                </header>

                <section className={styles.products}>
                    {searchProducts.map((product) => (
                        <Product key={product.id} props={product} />
                    ))}
                </section>
            </div>
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
