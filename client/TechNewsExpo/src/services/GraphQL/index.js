// import Config from "react-native-config";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // uri: Config.API,
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});

export default client;
