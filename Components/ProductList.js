import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import Product from "./Product";
import styles from "../styles/Components/ProductList.module.scss";

const ProductList = () => {
  const products = useSelector((state) => state.products);

  // Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

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
        <Slider {...settings}>{filterProducts(category)}</Slider>
      </div>
    ));

    return output;
  };

  return <>{generateProducts()}</>;
};

export default ProductList;
