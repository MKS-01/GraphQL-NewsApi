import React, { useRef, useEffect } from "react";
import LottieView from "lottie-react-native";
import { Container } from "_styles/NetworkMessage";
import { scaleSize } from "_styles/mixins";

const Loader = () => {
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
        style={{
          width: scaleSize(80),
          height: scaleSize(80),
        }}
        source={require("_assets/lottie/loader.json")}
        autoPlay
        loop
      />
    </Container>
  );
};

export default Loader;
