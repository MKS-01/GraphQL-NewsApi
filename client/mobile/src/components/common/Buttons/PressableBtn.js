import React from "react";
import { PressableContainer, PressableText } from "_styles/PressableBtn";

const PressableBtn = (props) => {
  return (
    <PressableContainer onPress={props.onPress}>
      <PressableText>{props.title}</PressableText>
    </PressableContainer>
  );
};

export default PressableBtn;
