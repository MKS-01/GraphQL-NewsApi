import React, { useContext } from "react";
import { View, Text } from "react-native";
import { AuthContext } from "_hooks/AuthHook";
import Title from "_components/common/Header";
import PressableBtn from "_components/common/Buttons/PressableBtn";
import { Container, RootSafeArea } from "_styles/RootView";

const SettingsScreen = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <RootSafeArea>
      <Container>
        <Title title={"Settings"} type="title" />
        <View
          style={{
            flex: 1,
            position: "absolute",
            left: 50,
            right: 50,
            bottom: 60,
          }}
        >
          <PressableBtn title="Log OUt" onPress={signOut} />
        </View>
      </Container>
    </RootSafeArea>
  );
};

export default SettingsScreen;
