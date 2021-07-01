import React from "react";
import { Redirect } from "react-router-dom";

import Layout from "../pages/layout";

export const renderRoute = (args) => {
  const { props, component } = args;

  const loggedIn = window.localStorage.getItem("token");

  if (loggedIn) {
    return <Layout component={component} {...props} />;
  } else {
    return <Redirect to={{ pathname: "/login" }} />;
  }
};
