import React from "react";
import { Form } from "semantic-ui-react";
import { Formik } from "formik";
import * as yup from "yup";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { LOGIN_USER_MUTATION } from "../mutations";
import {
  LoginFormWrapper,
  LoginButton,
  RememberMeCheckBox,
  ErrorMessage,
  NavigateToSignupContainer,
  SignupLink,
} from "./loginForm.styled";
import {
  FormInputWrapper,
  FormInputLabel,
  FormInput,
  StyledCheckbox,
} from "../../../common/form-components/formComponents.styled";

const LoginForm = (props) => {
  const [isloading, setIsLoading] = React.useState(false);
  const { addToast } = useToasts();
  const history = useHistory();
  const [loginUser, { data }] = useMutation(LOGIN_USER_MUTATION);

  const ValidationSchema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const handleLogin = async (payload) => {
    try {
      setIsLoading(true);
      const { email, password } = payload;
      const loginInput = { email, password };
      await loginUser({
        variables: { input: loginInput },
      });
    } catch (err) {
      setIsLoading(false);
      addToast(`${err}`, {
        appearance: "error",
        autoDismiss: true,
        autoDismissTimeout: 2000,
      });
    }
  };

  // useEffects to handle signup success
  React.useEffect(() => {
    if (data) {
      setIsLoading(false);
      addToast(`Congratulations!! Logged in successfully.`, {
        appearance: "success",
        autoDismiss: true,
        autoDismissTimeout: 2000,
      });
      localStorage.setItem('token',data.login.token)
      history.push("/dashboard");
    }
  }, [data, addToast, history]);

  return (
    <LoginFormWrapper>
      <Formik
        initialValues={{
          email: "",
          password: "",
          remember: false,
        }}
        onSubmit={(values, actions) => {
          handleLogin(values);
        }}
        validationSchema={ValidationSchema}
        render={({
          values,
          errors,
          handleChange,
          handleSubmit,
          isSubmitting,
          dirty,
          setFieldValue,
        }) => (
          <>
            <Form>
              <FormInputWrapper>
                <FormInput
                  color={"#fff"}
                  type="text"
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                />
                <FormInputLabel>Email id</FormInputLabel>
              </FormInputWrapper>
              {errors.email && <ErrorMessage> {errors.email}</ErrorMessage>}
              <FormInputWrapper>
                <FormInput
                  color={"#fff"}
                  type="password"
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  autocomplete={false}
                />
                <FormInputLabel>Password</FormInputLabel>
              </FormInputWrapper>
              {errors.password && (
                <ErrorMessage> {errors.password}</ErrorMessage>
              )}

              <RememberMeCheckBox>
                <label>Remember me</label>
                <StyledCheckbox
                  onChange={(event, data) => {
                    setFieldValue("remember", data.checked);
                  }}
                  value={values.remember}
                  name="remember"
                  toggle
                />
              </RememberMeCheckBox>
            </Form>

            <LoginButton
              loading={isloading}
              type="submit"
              onClick={() => {
                handleSubmit();
              }}
            >
              Sign in{" "}
            </LoginButton>

            <NavigateToSignupContainer>
              <div> {`Nor regisrered yet ? `}</div>
              <SignupLink onClick={(_) => history.push("/signup")}>
                {" "}
                {`Click here to create a new account!!`}
              </SignupLink>
            </NavigateToSignupContainer>
          </>
        )}
      />
    </LoginFormWrapper>
  );
};

export default LoginForm;
