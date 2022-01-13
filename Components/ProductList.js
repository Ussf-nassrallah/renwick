import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import styles from "../styles/Components/ProductList.module.scss";

const ProductList = () => {
    const products = useSelector((state) => state.products);

    let categories = [];

    for (let index = 0; index < products.length; index++) {
        categories.push(products[index].category);
    }

    const filterProducts = (category) => {
        let items = products.filter((item) => item.category === category);

        let output = items.map((item, index) => (
            <Product key={index} props={item} rating={item.rating.rate} />
        ));

        return output;
    };

    const generateProducts = () => {
        let uniqueCategories = [...new Set(categories)];

        let output = uniqueCategories.map((category, index) => (
            <div key={index} className={styles.products}>
                <h2>{category}</h2>
                <div className={styles.grid}>{filterProducts(category)}</div>
            </div>
        ));

        return output;
    };

    return <>{generateProducts()}</>;
};

export default ProductList;
