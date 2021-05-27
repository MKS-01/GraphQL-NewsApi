import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "_scenes/Home";
import SavedScreen from "_scenes/Saved";
import { BACKGROUND_COLOR } from "_styles/";

const RootTabs = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <RootTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Bookmark") {
            iconName = focused ? "bookmarks" : "bookmarks";
          } else if (route.name === "Search") {
            // iconName = focused ? "ios-list-box" : "ios-list";
            iconName = focused ? "ios-search" : "ios-search";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "#3373fa",
        inactiveTintColor: "gray",

        style: {
          backgroundColor: `${BACKGROUND_COLOR}`,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          borderTopColor: "#2c2c2e",
        },
      }}
      sceneContainerStyle={{
        backgroundColor: `${BACKGROUND_COLOR}`,
        border: 0,
      }}
    >
      <RootTabs.Screen name="Home" component={HomeScreen} />
      <RootTabs.Screen name="Bookmark" component={SavedScreen} />
      <RootTabs.Screen name="Search" component={SavedScreen} />
    </RootTabs.Navigator>
  );
};

export default AppNavigator;
