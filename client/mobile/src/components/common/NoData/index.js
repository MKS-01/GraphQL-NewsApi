import React from "react";
// import { ActivityIndicator } from "react-native";
import LottieView from "lottie-react-native";
import { Container } from "_styles/NetworkMessage";
import { scaleSize } from "_styles/mixins";

const NoData = () => {
  return (
    <Container>
      <LottieView
        style={
          {
            //   width: scaleSize(240),
            //   height: scaleSize(240),
          }
        }
        source={require("_assets/lottie/empty-state.json")}
        autoPlay
        loop
      />
    </Container>
  );
};

export default NoData;
