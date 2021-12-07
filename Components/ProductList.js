import React, { useContext } from "react";
import { ProductContext } from "../context/GlobalState";
import Product from "./Product";
import styles from "../styles/Components/ProductList.module.scss";

const ProductList = () => {
  const { products } = useContext(ProductContext);

  let categories = [];

  for (let index = 0; index < products.length; index++) {
    categories.push(products[index].category);
  }

  const filterProducts = (category) => {
    let items = products.filter((item) => item.category === category);

    let output = items.map((item, index) => (
      <Product
        key={index}
        id={item.id}
        image={item.image}
        category={item.category}
        title={item.title}
        description={item.description}
        rating={item.rating.rate}
        price={item.price}
      />
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
