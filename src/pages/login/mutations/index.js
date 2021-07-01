import { gql } from "@apollo/client";

export const LOGIN_USER_MUTATION = gql`
  mutation login($input: loginInput!) {
    login(input: $input) {
      token
    }
  }
`;
