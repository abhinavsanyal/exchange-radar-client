import { gql } from "@apollo/client";

export const GET_COUNTRIES_BY_NAME_QUERY = gql`
  query getCountriesByName($name: String!) {
    getCountriesByName(name: $name) {
      name
      population
      flag
      currencies {
        code
        name
        symbol
      }
    }
  }
`;

export const GET_ADDED_COUNTRIES_QUERY = gql`
  query getAddedCountries($cursor: String, $limit: Int) {
    getAddedCountries(cursor: $cursor, limit: $limit) {
      countryFeed {
        id
        name
        population
        flag
        exchangeRateToSEK
        currencies {
          code
          symbol
          name
        }
      }
      pageInfo {
        nextPageCursor
        hasNextPage
      }
    }
  }
`;
