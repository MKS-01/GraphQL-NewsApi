import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '_scenes/SignIn';

const Stack = createStackNavigator();

function AuthNavigatorConfig() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={SignInScreen} />
    </Stack.Navigator>
  );
}

const AuthNavigator = AuthNavigatorConfig;

export default AuthNavigator;
