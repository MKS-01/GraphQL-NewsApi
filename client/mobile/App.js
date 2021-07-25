import React from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  WorkSans_400Regular,
  WorkSans_600SemiBold,
  WorkSans_700Bold,
} from "@expo-google-fonts/dev";
// import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { ApolloProvider } from "@apollo/client";
import Navigator from "_navigations";
import client from "_services/GraphQL";
import { BACKGROUND_COLOR } from "_styles/colors";
import { View, StatusBar } from "react-native";

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
    <View
      style={{
        flex: 1,
        backgroundColor: `${BACKGROUND_COLOR}`,
      }}
    >
          <StatusBar
           backgroundColor="#1c1c1e"
          translucent={true}
          barStyle="light-content"
          />
      <ApolloProvider client={client}>
        <Navigator />
      </ApolloProvider>
    </View>
  );
};

export default App;
