import React from "react";

import { ToastProvider } from "react-toast-notifications";
import Login from "./components";

const LoginPage = (props) => {
  return (
    <ToastProvider>
      <Login {...props} />
    </ToastProvider>
  );
};

export default (LoginPage);
