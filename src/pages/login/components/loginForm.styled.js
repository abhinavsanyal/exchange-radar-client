import styled from "styled-components";
import { Button } from "semantic-ui-react";

export const SignupLink = styled.div`
  display: flex;
  font-size: 15px;
  font-weight: 700;
  margin-left: 30px;
  color: #0fa667;
  cursor: pointer;
`;
export const NavigateToSignupContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
`;
export const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3em;
  min-width: 80%;
`;
export const ErrorMessage = styled.div`
  display: flex;
  color: red;
  padding: 3px;
  font-size: 0.8rem;
  margin-top: -30px;
  margin-bottom: 25px;
`;
export const RememberMeCheckBox = styled.div`
  color: #000;
  display: flex;
  justify-content: space-between;
  & .ui.fitted.toggle.checkbox label:before {
    border: 1px solid white !important;
  }
  & .ui.fitted.checked.toggle.checkbox label:before {
    background: #10b56f;
    border: 1px solid white !important;
  }
`;

export const LoginButton = styled(Button)`
  &&&& {
    border-radius: 3px;
    height: 45px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    margin-top: 2em;
    background: #6b85ff;
    box-shadow: 0 0 5px #6b85ff;
  }
`;
