import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation signup($input: signupInput!) {
    signup(input: $input) {
      name
      email
      id
      countries {
        name
      }
    }
  }
`;

export const LOGIN_USER_MUTATION = gql`
  mutation login($input: loginInput!) {
    login(input: $input) {
      token
    }
  }
`;
