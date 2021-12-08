import { ProductProvider } from "../context/GlobalState";
import { Provider } from "react-redux";
import store from "../redux/store";
import Layout from "./../Layout/Layout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ProductProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProductProvider>
    </Provider>
  );
}

export default MyApp;
