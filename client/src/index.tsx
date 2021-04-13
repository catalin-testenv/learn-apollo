import React from "react";
import ReactDOM from "react-dom";
import {
    ApolloClient,
    ApolloProvider,
    HttpLink,
    InMemoryCache,
    makeVar,
} from "@apollo/client";
import App from "./App";
import './index.css';

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
                },
                hobby: {
                    read: (_, options) => {
                        const _hobby = hobby();
                        const currentValue = _hobby[options.readField('id') as string];
                        return currentValue === undefined ? 'no hobby' : currentValue;
                    }
                }
            },
        },
    },
});

type hobbyType = {
    [key: string]: string
}
export const hobby = makeVar({} as hobbyType);

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
