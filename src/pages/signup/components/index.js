import React from "react";

import SignupForm from "./signupForm";

import {
  SignupWrapper,
  FormWrapper,
  AnyfinLogo,
  DescriptionSubText,
  BackgroundWrapper,
  Background,
  LogoContainer,
  FormBody,
  DescriptionText,
} from "./index.styled";
import bgImage from "../../../assets/login_illustration_wallet.svg";
import anyfinLogoSrc from "../../../assets/anyfin_logo.png";

const Signup = (props) => {
  return (
    <>
      <SignupWrapper>
        <FormWrapper>
          <FormBody>
          <LogoContainer>
          
          <AnyfinLogo src={anyfinLogoSrc} />
          <DescriptionText>Signup on AER</DescriptionText>
          </LogoContainer>
            <DescriptionSubText>Signup today to explore and discover latest currency rates</DescriptionSubText>
            <SignupForm {...props} />
          </FormBody>
        </FormWrapper>
        <BackgroundWrapper>
          <Background src={bgImage} />
        </BackgroundWrapper>
      </SignupWrapper>
    </>
  );
};

export default Signup;
