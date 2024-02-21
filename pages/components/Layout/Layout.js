//Libraries
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

//Styling
export default function Layout({ children }){
    
    return(
        <>
            <Header />
            {children}
            <Footer />
        </>
        
    );
    
};