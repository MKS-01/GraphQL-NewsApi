import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "_scenes/Home";
import BookmarksScreen from "_scenes/Bookmarks";
import SearchScreen from "_scenes/Search";
import { BACKGROUND_COLOR } from "_styles/";
import DetailScreen from "_scenes/Detail";

const RootTabs = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const BookmarkStack = createStackNavigator();
const SearchStack = createStackNavigator();

function Home() {
  return (
    <HomeStack.Navigator initialRouteName="Home" headerMode="none">
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Detail" component={DetailScreen} />
    </HomeStack.Navigator>
  );
}

function Bookmark() {
  return (
    <BookmarkStack.Navigator initialRouteName="Bookmark" headerMode="none">
      <BookmarkStack.Screen name="Bookmark" component={BookmarksScreen} />
      <BookmarkStack.Screen name="Detail" component={DetailScreen} />
    </BookmarkStack.Navigator>
  );
}

function Search() {
  return (
    <SearchStack.Navigator initialRouteName="Search" headerMode="none">
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen name="Detail" component={DetailScreen} />
    </SearchStack.Navigator>
  );
}

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
      <RootTabs.Screen name="Home" component={Home} />
      <RootTabs.Screen name="Bookmarks" component={Bookmark} />
      <RootTabs.Screen name="Search" component={Search} />
    </RootTabs.Navigator>
  );
};

export default AppNavigator;
