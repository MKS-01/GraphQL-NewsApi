import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "_scenes/Home";
import BookmarksScreen from "_scenes/Bookmarks";
import SearchScreen from "_scenes/Search";
import { BACKGROUND_COLOR } from "_styles/colors";
import DetailScreen from "_scenes/Detail";
import SettingsScreen from "_scenes/Setting";
import TagScreen from "_scenes/Tag";
import ChangeCategory from "_scenes/Setting/ChangeCategory";
import ChangeTopic from "_scenes/Setting/ChangeTopic";

const RootStack = createStackNavigator();
const RootTabs = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const BookmarkStack = createStackNavigator();
const SearchStack = createStackNavigator();

function Home() {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Headlines" component={HomeScreen} />
      <HomeStack.Screen name="Detail" component={DetailScreen} />
      <HomeStack.Screen name="Tag" component={TagScreen} />
    </HomeStack.Navigator>
  );
}

function Bookmark() {
  return (
    <BookmarkStack.Navigator headerMode="none">
      <BookmarkStack.Screen name="Bookmark" component={BookmarksScreen} />
      <BookmarkStack.Screen name="Detail" component={DetailScreen} />
    </BookmarkStack.Navigator>
  );
}

function Search() {
  return (
    <SearchStack.Navigator headerMode="none">
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen name="Detail" component={DetailScreen} />
    </SearchStack.Navigator>
  );
}

const RootTabNavigator = () => {
  return (
    <RootTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HomeTab") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "BookmarksTab") {
            iconName = focused ? "bookmarks" : "bookmarks-outline";
          } else if (route.name === "SearchTab") {
            iconName = focused ? "ios-search" : "ios-search";
          } else if (route.name === "SettingTab") {
            iconName = focused ? "ios-settings" : "ios-settings-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "#cacaca",
        inactiveTintColor: "#8a8a8a",

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
      <RootTabs.Screen name="HomeTab" component={Home} />
      <RootTabs.Screen name="SearchTab" component={Search} />
      <RootTabs.Screen name="BookmarksTab" component={Bookmark} />
      <RootTabs.Screen name="SettingTab" component={SettingsScreen} />
    </RootTabs.Navigator>
  );
};

function RootStackNavigator() {
  return (
    <RootStack.Navigator
      mode="modal"
      headerMode="none"
      headerMode="none"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "rgba(24,26,27,0.8)" },
        // cardStyle: {backgroundColor: 'transparent'},
        cardOverlayEnabled: true,
        // cardStyleInterpolator: ({current: {progress}}) => ({
        //   cardStyle: {
        //     opacity: progress.interpolate({
        //       inputRange: [0, 0.5, 0.9, 1],
        //       outputRange: [0, 0.25, 0.7, 1],
        //     }),
        //   },
        //   overlayStyle: {
        //     opacity: progress.interpolate({
        //       inputRange: [0, 1],
        //       outputRange: [0, 0.5],
        //       extrapolate: 'clamp',
        //     }),
        //   },
        // }),
      }}
    >
      <RootStack.Screen name="Main" component={RootTabNavigator} />
      <RootStack.Screen name="ChangeCategory" component={ChangeCategory} />
      <RootStack.Screen name="ChangeTopic" component={ChangeTopic} />
    </RootStack.Navigator>
  );
}
const AppNavigator = () => <RootStackNavigator />;

export default AppNavigator;
