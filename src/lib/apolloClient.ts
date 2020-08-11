import {
    ApolloClient,
    HttpLink,
    InMemoryCache,
    NormalizedCacheObject,
} from "@apollo/client";

const createApolloClient = (): ApolloClient<NormalizedCacheObject> => {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: "https://obscure-retreat-94818.herokuapp.com/graphql",
        }),
    });
};

export default createApolloClient;
