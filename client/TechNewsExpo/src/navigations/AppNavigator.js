import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "_scenes/Home";
import BookmarksScreen from "_scenes/Bookmarks";
import SearchScreen from "_scenes/Search";
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
          } else if (route.name === "Bookmarks") {
            iconName = focused ? "bookmarks" : "bookmarks";
          } else if (route.name === "Search") {
            iconName = focused ? "ios-search" : "ios-search";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "#3373fa",
        inactiveTintColor: "gray",

        style: {
          backgroundColor: `${BACKGROUND_COLOR}`,
          borderTopColor: "#2c2c2e",
          elevation: 0,
        },
      }}
      sceneContainerStyle={{
        backgroundColor: `${BACKGROUND_COLOR}`,
      }}
    >
      <RootTabs.Screen name="Home" component={HomeScreen} />
      <RootTabs.Screen name="Bookmarks" component={BookmarksScreen} />
      <RootTabs.Screen name="Search" component={SearchScreen} />
    </RootTabs.Navigator>
  );
};

export default AppNavigator;
