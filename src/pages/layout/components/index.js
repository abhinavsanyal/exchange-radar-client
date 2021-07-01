import React from "react";

import Header from "../../../common/common-header";


import { LayoutWrapper } from "./index.styled";

const Layout = (props) => {
  const SubView = props.component || "";
  
  return (
    <LayoutWrapper>
      <Header />
      <SubView  {...props}/>
    </LayoutWrapper>
  );
};

export default Layout;
