import React, { useCallback, useEffect } from "react";
import { View, StatusBar } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import {
  WorkSans_400Regular,
  WorkSans_600SemiBold,
  WorkSans_700Bold,
} from "@expo-google-fonts/work-sans";
import { ApolloProvider } from "@apollo/client";
import Navigator from "_navigations";
import client from "_services/GraphQL";
import { BACKGROUND_COLOR } from "_styles/colors";
import {
  TapGestureHandler,
  RotationGestureHandler,
} from "react-native-gesture-handler";

const App = () => {
  const [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    WorkSans_600SemiBold,
    WorkSans_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TapGestureHandler>
      <RotationGestureHandler>
        <View
          style={{
            flex: 1,
            backgroundColor: `${BACKGROUND_COLOR}`,
          }}
          onLayout={onLayoutRootView}
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
      </RotationGestureHandler>
    </TapGestureHandler>
  );
};

export default App;
