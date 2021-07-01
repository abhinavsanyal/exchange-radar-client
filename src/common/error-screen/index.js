import React from "react";
import "./index.module.scss";
// import ErrorImg from "../../../assets/error.png";

const ErrorScreen = () => {
  return (
    <div className={"wrapper"}>
      <div className={"section"}>
        <img className={"marginBottom40"} src={""} alt="error-illustration"/>
        <div className={`marginBottom20 heading`}>Oops, Something went wrong</div>
        <div className={`marginBottom20 subHeading`}>
          We’re sorry. We’re having some trouble completing your request. Please try again later.
        </div>
        <div className={"button"} onClick={() => window.location.reload()}>
          Retry
        </div>
      </div>
    </div>
  );
};


export default ErrorScreen;