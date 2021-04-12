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

const cache = new InMemoryCache({
    typePolicies: {
        User: { // Every person type
            fields: {
                // firstName: { // A field on the person type
                //     read (value = "UNKNOWN NAME") { // when it's read
                //         return value + '!';
                //     },
                //     merge(existing, incoming) {
                //         return existing ? existing + '~' + incoming : incoming;
                //     }
                // },
                iName(value, options, ...rest) {
                    return '-' + options.readField('lastName') + options.readField('firstName') + '-';
                }
            },
        },
    },
});

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
    connectToDevTools: true
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

export default App;
