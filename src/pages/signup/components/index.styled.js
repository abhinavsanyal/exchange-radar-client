import styled from "styled-components";
import { Image } from "semantic-ui-react";

export const SignupWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  background-image: linear-gradient(to left, #eeeeee, #e9e9e9 0%);
`;

export const FormWrapper = styled.div`
  flex: 1;
  background: #10B56F;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    margin: 15% 0%;
  }
  @media (min-width: 768px) and (orientation: portrait) {
    margin: 15% 0%;
  }
`;
export const BackgroundWrapper = styled.div`
  flex: 1;
  padding:40px;
 
`;

export const Background = styled.div`
 flex: 1;
 height: 100%;
 background-image: ${({ src }) =>
    `url(${src})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  @media (max-width: 767px) {
    margin: 15% 0%;
  }
  @media (min-width: 768px) and (orientation: portrait) {
    margin: 15% 0%;
  }
`;

export const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  flex: 0.85;
  min-height: 100px;
  align-items: flex-start;
  width: 100%;
`;

export const AnyfinLogo = styled(Image)`
  margin-right: 10px;
  height: 40px;
`;

export const DescriptionText = styled.p`
  font-size: 29px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: rgba(2, 2, 2, 0.8);
`;

export const DescriptionSubText = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 100;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: rgba(2, 2, 2, 0.6);

`;
export const LogoContainer = styled.p`
display: flex;
align-items: center;

`;
