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
        uri: "https://obscure-retreat-94818.herokuapp.com/graphql",
    }),
});

const App = ({ Component, pageProps }: AppProps): ReactElement => (
    <ApolloProvider client={client}>
        <Component {...pageProps} />
    </ApolloProvider>
);

export default App;
