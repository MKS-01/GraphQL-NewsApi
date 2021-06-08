import React from "react";
import {
  ErrorText,
  ErrorContainer,
  ErrorImage,
  Container,
} from "_styles/NetworkMessage";

const NetworkMessage = () => (
  <ErrorContainer>
    <ErrorImage source={require("_assets/images/no-wifi.png")} />
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
