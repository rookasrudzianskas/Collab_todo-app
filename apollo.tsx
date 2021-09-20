import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";


const URI = 'http://localhost:4000/';

const client = new ApolloClient({
    uri: URI,
    cache: new InMemoryCache()
});
