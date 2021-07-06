import React, { useState, useContext } from "react";
import { View, Button, TextInput } from "react-native";
// import { AuthContext } from "../../navigations";
import { AuthContext } from "_hooks/AuthHook";
import { RootScrollView, RootSafeArea } from "_styles/RootView";

const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  return (
    <RootSafeArea>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      /> */}
        <Button
          title="Sign in"
          onPress={() =>
            signIn({
              username,
              password,
            })
          }
        />
      </View>
    </RootSafeArea>
  );
};

export default SignInScreen;
