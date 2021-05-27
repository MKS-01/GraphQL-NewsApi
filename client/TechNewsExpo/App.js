import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ApolloProvider } from "@apollo/client";
import Navigator from "_navigations";
import NetworkConnection from "_utils/NetworkConnection";
import client from "_services/GraphQL";
import Error from "_components/common/Error";

const App = () => {
  let network = NetworkConnection();

  if (network === false) {
    return <Error network={true} />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ApolloProvider client={client}>
        <Navigator />
      </ApolloProvider>
    </SafeAreaView>
  );
};

export default App;
