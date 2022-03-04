import React, { useState } from "react";

// Components
import SearchBox from "../Components/SearchBox";
import Upperbar from "./Upperbar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [input, setInput] = useState(false);

  return (
    <>
      <SearchBox input={input} setInput={setInput} />
      <header>
        <Upperbar />
        <Navbar input={input} setInput={setInput} />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
