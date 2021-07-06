import React, { useState, useContext } from "react";
import { View, Button } from "react-native";
import TextInput from "_components/common/TextInput";
import { AuthContext } from "_hooks/AuthHook";
import { RootScrollView, RootSafeArea } from "_styles/RootView";

const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  return (
    <RootSafeArea>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          // alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <TextInput
          placeholderText="Username"
          title="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholderText="Password"
          secureTextEntry
          title="Password"
          value={password}
          onChangeText={setPassword}
        />

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
