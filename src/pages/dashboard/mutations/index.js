import { gql } from "@apollo/client";

export const ADD_COUNTRY_MUTATION = gql`
  mutation addCountry($input: createCountryInput!) {
    addCountry(input: $input) {
      id
      name
      population
      exchangeRateToSEK
      currencies {
        code
        symbol
      }
    }
  }
`;

export const REMOVE_COUNTRY_MUTATION = gql`
  mutation deleteCountry($id: ID!) {
    deleteCountry(id: $id) {
     name
    }
  }
`;
