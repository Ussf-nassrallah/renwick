import Head from "next/head";
import Image from "next/image";

// COMPONENTS
import ProductList from "../Components/ProductList";

// STYLES
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ProductList />
      </main>
    </>
  );
}