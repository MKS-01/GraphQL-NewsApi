import React from "react";
import { Container } from "_styles/RootView";
import { ErrorText, ErrorContainer, ErrorImage } from "_styles/NetworkMessage";

const NetworkMessage = () => (
  <ErrorContainer>
    <ErrorImage
      source={{
        uri: "https://reactnative.dev/img/tiny_logo.png",
      }}
      source={require("_assets/images/no-wifi.png")}
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
        <ErrorText>{props.error}</ErrorText>
      )}
    </Container>
  );
};

export default Error;
