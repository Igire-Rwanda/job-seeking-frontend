import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";

const HomeLayout = (props) =>{
    return(
        <>
        <Navbar />
        <div style={{width:"100%",minHeight :"80vh",paddingTop:"36px"}}>{props.children}</div>
        <Footer/>
        </>
    )
}
export default HomeLayout