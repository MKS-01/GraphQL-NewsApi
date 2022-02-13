import React from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  // WorkSans_100Thin,
  // WorkSans_200ExtraLight,
  // WorkSans_300Light,
  WorkSans_400Regular,
  // WorkSans_500Medium,
  WorkSans_600SemiBold,
  WorkSans_700Bold,
  // WorkSans_800ExtraBold,
  // WorkSans_900Black,
  // WorkSans_100Thin_Italic,
  // WorkSans_200ExtraLight_Italic,
  // WorkSans_300Light_Italic,
  // WorkSans_400Regular_Italic,
  // WorkSans_500Medium_Italic,
  // WorkSans_600SemiBold_Italic,
  // WorkSans_700Bold_Italic,
  // WorkSans_800ExtraBold_Italic,
  // WorkSans_900Black_Italic,
} from "@expo-google-fonts/work-sans";
// import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { ApolloProvider } from "@apollo/client";
import Navigator from "_navigations";
import client from "_services/GraphQL";
import { BACKGROUND_COLOR } from "_styles/colors";
import { View, StatusBar } from "react-native";

const App = () => {
  let [fontsLoaded] = useFonts({
    // WorkSans_100Thin,
    // WorkSans_200ExtraLight,
    // WorkSans_300Light,
    WorkSans_400Regular,
    // WorkSans_500Medium,
    WorkSans_600SemiBold,
    WorkSans_700Bold,
    // WorkSans_800ExtraBold,
    // WorkSans_900Black,
    // WorkSans_100Thin_Italic,
    // WorkSans_200ExtraLight_Italic,
    // WorkSans_300Light_Italic,
    // WorkSans_400Regular_Italic,
    // WorkSans_500Medium_Italic,
    // WorkSans_600SemiBold_Italic,
    // WorkSans_700Bold_Italic,
    // WorkSans_800ExtraBold_Italic,
    // WorkSans_900Black_Italic,
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
