import React from "react";

import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Layout />
      <Footer />
      <GlobalStyles />
    </>
  );
}

export default App;
