import React from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  WorkSans_400Regular,
  WorkSans_600SemiBold,
  WorkSans_700Bold,
} from "@expo-google-fonts/dev";
import { SafeAreaView } from "react-native-safe-area-context";
import { ApolloProvider } from "@apollo/client";
import Navigator from "_navigations";
import { StatusBar } from "expo-status-bar";
import client from "_services/GraphQL";
import { BACKGROUND_COLOR } from "_styles/colors";

const App = () => {
  let [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    WorkSans_600SemiBold,
    WorkSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: `${BACKGROUND_COLOR}`,
      }}
    >
      <StatusBar style="inverted" />
      <ApolloProvider client={client}>
        <Navigator />
      </ApolloProvider>
    </SafeAreaView>
  );
};

export default App;
