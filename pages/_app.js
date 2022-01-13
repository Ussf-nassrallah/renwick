// import { ProductProvider } from "../context/GlobalState";
import { Provider } from "react-redux";
import store from "../Store/store";
import Layout from "./../Layout/Layout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    // <ProductProvider>
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
    // </ProductProvider>
  );
}

export default MyApp;
