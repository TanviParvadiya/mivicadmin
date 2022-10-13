import React from "react";
import Routes from "./Routes";
import Footer from "./footer";
import DashboardTemplate from "./index";

const Layout = () => {
  return (
    <div>
      <DashboardTemplate />
      <Routes />
      <Footer />
    </div>
  );
};

export default Layout;
