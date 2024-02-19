//Libraries
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
//Pages

//Styling
const Layout = ({ children }) => {

    return(
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
    
};

export default Layout;