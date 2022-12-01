import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Nav from "../components/nav"
const Index = () => {
  return (
    <>
      <Nav />
      <Outlet>
      </Outlet>
      <Footer />
    </>
  );
};
export default Index;
