import React, { useContext } from "react";
import { View, Dimensions, StyleSheet, Text } from "react-native";
import { AuthContext } from "_hooks/AuthHook";
import PressableBtn from "_components/common/Buttons/PressableBtn";
import Profile from "_components/common/Profile";
import { Container, RootSafeArea } from "_styles/RootView";
import { scaleSize, scaleFont } from "_styles/mixins";
import { OptionsContainer, OptionsText } from "_styles/SettingsScreen";
import { Ionicons } from "@expo/vector-icons";
import { GRAY_MEDIUM } from "_styles/colors";

const SettingsScreen = () => {
  const { signOut } = useContext(AuthContext);

  const Logout = () => (
    <View style={styles.logoutRoot}>
      <View style={styles.logoutBtn}>
        <PressableBtn title="Log Out" onPress={signOut} />
        <Text style={styles.versionText}>Version 1.0</Text>
      </View>
    </View>
  );

  const Options = ({ text }) => (
    <OptionsContainer>
      <OptionsText>{text}</OptionsText>
      <Ionicons
        name={"chevron-forward"}
        size={scaleSize(25)}
        color={GRAY_MEDIUM}
      />
    </OptionsContainer>
  );

  return (
    <RootSafeArea>
      <Container>
        <Profile username="MKS" />
        <View style={styles.separator} />
        <Options text="Change Category" />
        <Options text="Change Favourite Topics" />
        <Logout />
      </Container>
    </RootSafeArea>
  );
};

const styles = StyleSheet.create({
  logoutRoot: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: scaleSize(55),
  },
  logoutBtn: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: scaleSize(105),
  },
  versionText: {
    color: "#8a8a8a",
    marginTop: scaleSize(10),
    textTransform: "uppercase",
    fontSize: scaleFont(12),
  },
  separator: {
    marginTop: scaleSize(45),
  },
});

export default SettingsScreen;
