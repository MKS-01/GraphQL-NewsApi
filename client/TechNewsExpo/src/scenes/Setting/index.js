import React from "react";
import { View, Text } from "react-native";
import Title from "_components/common/Header";
import { Container, RootSafeArea } from "_styles/RootView";

const SettingsScreen = () => {
  return (
    <RootSafeArea>
      <Container>
        <Title title={"Settings"} type="title" />
      </Container>
    </RootSafeArea>
  );
};

export default SettingsScreen;
