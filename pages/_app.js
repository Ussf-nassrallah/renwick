import { ProductProvider } from "../context/GlobalState";
import Layout from "./../Layout/Layout";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ProductProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProductProvider>
  );
}

export default MyApp;
