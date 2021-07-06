import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "_scenes/SignIn";
import SignUpScreen from "_scenes/SignUp";
import ForgotScreen from "_scenes/Forgot";

const Stack = createStackNavigator();

function AuthNavigatorConfig() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Forgot" component={ForgotScreen} />
    </Stack.Navigator>
  );
}

const AuthNavigator = AuthNavigatorConfig;

export default AuthNavigator;
