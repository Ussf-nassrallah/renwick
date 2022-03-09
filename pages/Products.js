import React, { useState, useEffect, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Product from "../Components/Product";
import styles from "../styles/ProductsPage.module.scss";

export default function Products({ products }) {
   const [list, setList] = useState(products);
   const [categories, setCategories] = useState(getCategories());
   const [input, setInput] = useState("");
   const [value, setValue] = useState("");

   // get Categories from products
   function getCategories() {
      let output = [];
      let s = new Set();

      for (let i = 0; i < products.length; i++) {
         s.add(products[i].category);
      }
      let categories = Array.from(s);

      for (let j = 0; j < categories.length; j++) {
         output.push({ id: j + 1, label: categories[j], checked: false });
      }

      return output;
   }

   // handle change checked
   const handleChangeChecked = (id) => {
      const categoriesStateList = categories;

      const changeCheckedCategories = categoriesStateList.map((category) =>
         category.id === id
            ? { ...category, checked: !category.checked }
            : category
      );

      setCategories(changeCheckedCategories);
   };

   const filterProducts = (category) =>
      products.filter((product) => product.category === category);

   // filter products by keywords
   const filterProductsbyStr = (array, str) =>
      array.filter((product) => product.title.includes(str));

   // filter Products by Category
   const applyFilter = () => {
      let output = [];
      let checkCategories = [];
      let updatedList;

      // check input field
      for (let i = 0; i < categories.length; i++) {
         if (categories[i].checked) {
            checkCategories.push(categories[i]);
         }
      }

      // filter products by category
      for (let i = 0; i < checkCategories.length; i++) {
         updatedList = products.filter(
            (product) => product.category === checkCategories[i].label
         );
         output.push(...updatedList);
      }

      // updated products list
      if (
         output.length === 0 &&
         checkCategories.length === 0 &&
         input.length === 0
      ) {
         setList(products);
      } else if (input.length > 0) {
         setList(filterProductsbyStr(output, input));
      } else if (checkCategories.length === 0) {
         setList(filterProductsbyStr(products, input));
      } else {
         setList(output);
      }
   };

   useEffect(() => {
      applyFilter();
   }, [input, products]);

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
                     <label htmlFor={category.label}>
                        {category.label}{" "}
                        <span>{`(${
                           filterProducts(category.label).length
                        })`}</span>
                     </label>

                     <input
                        type="checkbox"
                        name={category.label}
                        checked={category.checked}
                        onChange={() => handleChangeChecked(category.id)}
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
               {list.map((product) => (
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
