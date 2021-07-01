import React from "react";
import { Redirect } from "react-router-dom";

import Login from "../pages/login";
import Signup from "../pages/signup";
import Dashboard from "../pages/dashboard";

import { renderRoute } from "./renderRoute";

export const defaultRoute = {
  path: "/dashboard",
};

export const routes = [
  /* LOGIN */
  {
    path: "/login",
    render: (props) => {
      const isLoggedIn = localStorage.getItem('token');
      return isLoggedIn ? (
        <Redirect to={{ pathname: defaultRoute.path }} />
      ) : (
        <Login {...props} />
      );

    },
  },

  /* SIGNUP */
  {
    path: "/signup",
    render: (props) => {
      return <Signup {...props} />;
    },
  },

  /* DASHBOARD */
  {
    path: "/dashboard",
    render: (props) =>
      renderRoute({
        props: props,
        component: Dashboard,
      }),
  },
];
