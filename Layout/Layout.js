import React from "react";

// Components
import SearchBox from "../Components/SearchBox";
import Upperbar from "./Upperbar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <>
            <SearchBox />
            <header>
                <Upperbar />
                <Navbar />
            </header>
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
