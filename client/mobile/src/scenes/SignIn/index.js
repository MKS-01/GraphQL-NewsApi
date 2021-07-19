import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PressableBtn from "_components/common/Buttons/PressableBtn";
import TextInput from "_components/common/TextInput";
import { AuthContext } from "_hooks/AuthHook";
import { FONT_FAMILY_SEMIBOLD } from "_styles/typography";
import { RootSafeArea } from "_styles/RootView";

const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

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

        <View style={{ marginTop: 10 }} />
        <PressableBtn
          title="Sign In"
          onPress={() =>
            signIn({
              username,
              password,
            })
          }
        />
        <View style={styles.textContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.text}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
            <Text style={styles.text}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </RootSafeArea>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-around",
    width: `50%`,
    alignSelf: "center",
  },
  text: {
    fontFamily: FONT_FAMILY_SEMIBOLD,
    color: "#cacaca",
    textDecorationLine: "underline",
  },
});

export default SignInScreen;
