import React from "react";

import LoginForm from "./loginForm";

import {
  LoginWrapper,
  FormWrapper,
  AnyfinLogo,
  DescriptionSubText,
  BackgroundWrapper,
  Background,
  LogoContainer,
  FormBody,
  DescriptionText,
} from "./index.styled";
import bgImage from "../../../assets/login_illustration_anim.svg";
import anyfinLogoSrc from "../../../assets/anyfin_logo.png";

const Login = (props) => {
  return (
    <>
      <LoginWrapper>
        <FormWrapper>
          <FormBody>
          <LogoContainer>     
          <AnyfinLogo src={anyfinLogoSrc} />
          <DescriptionText>Welcome to AER</DescriptionText>
          </LogoContainer>
            <DescriptionSubText>Anyfin Exchange Radar | A free global exchange rate discovery tool</DescriptionSubText>
            <LoginForm {...props} />
          </FormBody>
        </FormWrapper>
        <BackgroundWrapper>
          <Background src={bgImage} />
        </BackgroundWrapper>
      </LoginWrapper>
    </>
  );
};

export default Login;
