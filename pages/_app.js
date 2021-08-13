import { Provider } from "react-redux";
import "../styles/globals.css";
import { store } from "../app/store";
import Layout from "../components/Layout";
import { Provider as AuthProvider } from "next-auth/client";
import Router from "next/router"
import Loader from "../components/Loader";
import { useState } from "react";

const MyApp = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false)
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true)
  })
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false)
  })
  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <Layout>
          {loading ? <Loader /> : <Component {...pageProps} />}
          {/* <Component {...pageProps} /> */}
        </Layout>
      </Provider>
    </AuthProvider>
  );
};

export default MyApp;
