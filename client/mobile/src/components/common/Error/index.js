import React, { useRef, useEffect } from "react";
import LottieView from "lottie-react-native";
import {
  ErrorText,
  ErrorContainer,
  ErrorImage,
  Container,
} from "_styles/NetworkMessage";
import { scaleSize } from "_styles/mixins";

const NetworkMessage = () => {
  const animationRef = useRef();

  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <ErrorContainer>
      <LottieView
        ref={(animation) => {
          animationRef.current = animation;
        }}
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
};

const Error = (props) => {
  const animationRef = useRef();

  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <Container>
      {props.network ? (
        <NetworkMessage />
      ) : (
        <LottieView
          ref={(animation) => {
            animationRef.current = animation;
          }}
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
