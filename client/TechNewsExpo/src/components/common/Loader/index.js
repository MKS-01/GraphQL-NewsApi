import React from "react";
import { ActivityIndicator } from "react-native";
import { Container } from "_styles/NetworkMessage";

const Loader = () => {
  return (
    <Container>
      <ActivityIndicator size="small" />
    </Container>
  );
};

export default Loader;
