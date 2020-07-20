import React, { ReactElement } from "react";
import { AppProps } from "next/app";
import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    HttpLink,
} from "@apollo/client";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: "http://localhost:1337/graphql",
    }),
});

const App = ({ Component, pageProps }: AppProps): ReactElement => (
    <ApolloProvider client={client}>
        <Component {...pageProps} />
    </ApolloProvider>
);

export default App;
