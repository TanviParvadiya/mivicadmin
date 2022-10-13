import DashboardTemplate from "./containers/templates/Dashboard";
import { useRoutes } from "react-router-dom";
import AuthenticationTemplate from "./containers/templates/Authentication";
import RoutesAuth from "./containers/templates/Authentication";
import { useState, useEffect } from "react";
import Login from "./assets/components/pages/login/login";
// import { Routers } from "../src/config/router/index";
export default function Route() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    // console.log(JSON.parse(localStorage.getItem("user")));
    const user = JSON.parse(localStorage.getItem("user") || "");
    setLoggedIn(true);
  });
  return (
    <>
      {/* {loggedIn && <Login />} */}
      <DashboardTemplate />
      {/* <RoutesAuth /> */}
    </>
  );
}
