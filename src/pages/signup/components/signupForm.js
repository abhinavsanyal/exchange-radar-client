import React from "react";
import { Form } from "semantic-ui-react";
import { Formik } from "formik";
import * as yup from "yup";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { CREATE_USER_MUTATION } from "../mutations";
import {
  SignupFormWrapper,
  SignupButton,
  ErrorMessage,
  NavigateToLoginContainer,
  LoginLink,
} from "./signupForm.styled";
import {
  FormInputWrapper,
  FormInputLabel,
  FormInput,
} from "../../../common/form-components/formComponents.styled";

const SignupForm = (props) => {
  const [isloading, setIsLoading] = React.useState(false);
  const { addToast } = useToasts();
  const history = useHistory();
  const [createUser, { data }] = useMutation(CREATE_USER_MUTATION);

  const ValidationSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const handleSignup = async (payload) => {
    try {
      setIsLoading(true);
      const { name, email, password } = payload;
      const signupInput = { name, email, password };
      await createUser({
        variables: { input: signupInput },
      });

    } catch (error) {
      setIsLoading(false);
      addToast(`${error}`, {
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
      addToast(`Congratulations!! User created successfully.`, {
        appearance: "success",
        autoDismiss: true,
        autoDismissTimeout: 2000,
      });
      history.push("/login");
    }
  }, [data, addToast, history]);

  return (
    <SignupFormWrapper>
      <Formik
        initialValues={{
          name:"",
          email: "",
          password: "",
        }}
        onSubmit={(values, actions) => {
          handleSignup(values);
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
                  value={values.name}
                  name="name"
                />
                <FormInputLabel>Full Name</FormInputLabel>
              </FormInputWrapper>
              {errors.name && <ErrorMessage> {errors.name}</ErrorMessage>}
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
            </Form>

            <SignupButton
              loading={isloading}
              type="submit"
              onClick={() => {
                handleSubmit();
              }}
            >
              Create Account{" "}
            </SignupButton>
            <NavigateToLoginContainer>
              <div> {`Already a registered user ? `}</div>
              <LoginLink onClick={(_) => history.push("/login")}>
                {" "}
                {`Click here to log in to your account.`}
              </LoginLink>
            </NavigateToLoginContainer>
          </>
        )}
      />
    </SignupFormWrapper>
  );
};

export default SignupForm;
