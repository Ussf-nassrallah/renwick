// HOOKS
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
// ICONS
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { IoMdArrowForward } from "react-icons/io";
// COMPONENTS
import PrimaryBtn from "../Layout/PrimaryBtn";
// STYLES
import styles from "../styles/Components/SearchBox.module.scss";

const SearchBox = ({ input, setInput }) => {
    // Get Products from Redux Store
    const products = useSelector((state) => state.products);
    // Input Value
    const [value, setValue] = useState(null);
    // Search Products
    const [searchProducts, setSearchProducts] = useState([]);

    useEffect(() => {
        let searchProducts = () => {
            let searchProducts = products.filter((product) =>
                product.title.includes(value)
            );

            if (value === "") {
                setSearchProducts([]);
            } else {
                setSearchProducts(searchProducts);
            }
        };
        searchProducts();
    }, [value, products]);

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
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />

                <div
                    className={styles.closeIcon}
                    onClick={() => {
                        setInput(false);
                        setValue("");
                    }}
                >
                    <AiOutlineClose />
                </div>
            </div>

            <div
                className={
                    value === "" || value === null || !input
                        ? `${styles.searchItems} ${styles.hide}`
                        : `${styles.searchItems} ${styles.show}`
                }
            >
                <div className={styles.searchProducts}>
                    {searchProducts.slice(0, 3).map((product) => (
                        <div key={product.id} className={styles.searchProduct}>
                            <Image
                                src={product.image}
                                objectFit="contain"
                                width={170}
                                height={170}
                            />

                            <div className={styles.searchProductInfo}>
                                <p className={styles.searchProductTitle}>
                                    {product.title}
                                </p>

                                <p className={styles.searchProductCategory}>
                                    {product.category}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.showBtn}>
                    <PrimaryBtn
                        value="View All"
                        icon={<IoMdArrowForward className="icon" />}
                    />
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
