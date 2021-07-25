import React from "react";
import LottieView from "lottie-react-native";
import {
  ErrorText,
  ErrorContainer,
  ErrorImage,
  Container,
} from "_styles/NetworkMessage";
import { scaleSize } from "_styles/mixins";

const NetworkMessage = () => (
  <ErrorContainer>
    <LottieView
      style={{
        width: scaleSize(220),
        height: scaleSize(220),
      }}
      source={require("_assets/lottie/no-signal.json")}
      autoPlay
      loop
    />
    <ErrorText>
      Please check your network connectivity and try again !
    </ErrorText>
  </ErrorContainer>
);

const Error = (props) => {
  return (
    <Container>
      {props.network ? (
        <NetworkMessage />
      ) : (
        <LottieView
          style={
            {
              // width: scaleSize(300),
              // height: scaleSize(300),
            }
          }
          source={require("_assets/lottie/error.json")}
          autoPlay
          loop
        />
        // <ErrorText>{props.error}</ErrorText>
      )}
    </Container>
  );
};

export default Error;
