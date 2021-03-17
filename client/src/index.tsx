import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import App from "./App";

const token = process.env.REACT_APP_AAA || '';

const cache = new InMemoryCache();
// @ts-ignore
window.cache = cache;
const link = new HttpLink({
  uri: "http://localhost:4000/graphql",
  headers: {
  },
});

const client = new ApolloClient({
  link,
  cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

export default App;
