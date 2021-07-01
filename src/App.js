//------------------------------Start----------------------------------------//
import React from "react";

//------------------------------Apollo Client----------------------------------------//
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from '@apollo/client/link/context';

//------------------------------Router---------------------------------------//
import AppRoutes from "./routes";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  if(token){
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : "",
      }
    }
  } else {
    return {};
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:3001/anyfinExchangeRadar" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(link),
});

const App = () => {
  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <AppRoutes />
      </ApolloProvider>
    </React.StrictMode>
  );
};

export default App;
