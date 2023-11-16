import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  // My WordPress GraphQL endpoint.
  uri: "https://db.rent-internet.com/graphql",
  // Apollo Cacheing
  cache: new InMemoryCache(),
});