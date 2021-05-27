import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "_scenes/Home";
import SavedScreen from "_scenes/Saved";

const RootTabs = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <RootTabs.Navigator>
      <RootTabs.Screen name="Home" component={HomeScreen} />
      <RootTabs.Screen name="Saved" component={SavedScreen} />
    </RootTabs.Navigator>
  );
};

export default AppNavigator;
