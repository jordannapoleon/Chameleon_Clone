//Libraries
import React, { useEffect, useState } from "react";
//Pages
import Header from "./Header";
import Footer from "./Footer";
//Styling
const Layout = ({ children }) => {
    <Header />
    {children}
    <Footer />
};

export default Layout;