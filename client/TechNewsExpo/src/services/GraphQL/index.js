import Constants from "expo-constants";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // uri: Constants.manifest.extra.api_url + "/graphql",
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});

export default client;
