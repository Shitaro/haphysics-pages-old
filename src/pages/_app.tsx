import React, { ReactElement } from "react";
import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "../lib/apolloClient";

const App = ({ Component, pageProps }: AppProps): ReactElement => {
    const apolloClient = createApolloClient();
    return (
        <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
};

export default App;
