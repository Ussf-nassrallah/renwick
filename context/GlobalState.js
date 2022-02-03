import React, { useState, useEffect, createContext } from "react";

// CREATE CONTEXT
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    // INITIAL STATE
    const [products, setProducts] = useState([]);

    // FETCH DATA
    useEffect(() => {
        // GET PRODUCTS FROM FAKE STORE API
        const getProducts = async () => {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setProducts(data);
        };

        getProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ products: products }}>
            {children}
        </ProductContext.Provider>
    );
};
