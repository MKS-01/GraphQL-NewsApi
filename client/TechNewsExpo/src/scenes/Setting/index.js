import React from "react";
import { View, Text } from "react-native";
import { RootScrollView, RootSafeArea } from "_styles/RootView";

const SettingsScreen = () => {
  return (
    <RootSafeArea>
      <View>
        <Text>Setting</Text>
      </View>
    </RootSafeArea>
  );
};

export default SettingsScreen;
