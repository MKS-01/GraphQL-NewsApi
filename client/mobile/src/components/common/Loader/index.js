import React from "react";
// import { ActivityIndicator } from "react-native";
import LottieView from 'lottie-react-native';
import { Container } from "_styles/NetworkMessage";
import { scaleSize } from "_styles/mixins";

const Loader = () => {
  return (
    <Container>
      <LottieView
          style={{
            width: scaleSize(80),
            height: scaleSize(80),       
          }}
          source={require('_assets/lottie/loader.json')}
          autoPlay loop
          
        />
    </Container>
  );
};

export default Loader;
