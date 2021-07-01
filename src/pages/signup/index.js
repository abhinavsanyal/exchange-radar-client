import React from "react";

import { ToastProvider } from "react-toast-notifications";
import Signup from "./components";

const SignupPage = (props) => {
  return (
    <ToastProvider>
      <Signup {...props} />
    </ToastProvider>
  );
};

export default (SignupPage);
