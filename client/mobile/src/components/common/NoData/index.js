import React, { useRef, useEffect } from "react";
import LottieView from "lottie-react-native";
import { Container } from "_styles/NetworkMessage";
import { scaleSize } from "_styles/mixins";

const NoData = () => {
  const animationRef = useRef();

  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <Container>
      <LottieView
        ref={(animation) => {
          animationRef.current = animation;
        }}
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
