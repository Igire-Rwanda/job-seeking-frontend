import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";

const HomeLayout = (props) =>{
    return(
        <>
        {/* <Navbar/> */}
        <div style={{minHeight :"80vh"}}>{props.children}</div>
        <Footer/>
        </>
    )
}
export default HomeLayout