import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as actionTypes from "../Store/actions/types";
import Head from "next/head";
import Banner from "../Components/Banner";
import ProductList from "../Components/ProductList";
import styles from "../styles/Home.module.scss";
import SearchBox from "../Components/SearchBox";
import Modal from "../Components/Modal";

function Home({ products }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: actionTypes.SET_PRODUCTS,
            payload: products,
        });
    }, []);

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Banner />
                <ProductList />
                <Modal />
            </main>
        </>
    );
}

// Fetch Data from fake store api
export const getStaticProps = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    return {
        props: { products: data },
    };
};

export default Home;
