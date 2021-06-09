import styled from "styled-components/native";
import { BACKGROUND_COLOR, BACKGROUND_COLOR_SEC, TEXT_PRIMARY } from "./colors";
import { scaleFont, scaleSize } from "./mixins";

export const Card = styled.TouchableOpacity`
  flex: 1;
  margin: ${scaleSize(4)}px;
  flex-direction: column;
`;

export const Image = styled.Image`
  height: ${scaleSize(165)}px;
  border-radius: ${scaleSize(1)}px; ;
`;

export const Text = styled.Text`
  font-size: ${scaleFont(13)}px;
  color: ${TEXT_PRIMARY};
  margin: ${scaleSize(4)}px ${scaleSize(2)}px;
`;

export const ImageContainer = styled.View`
  height: ${scaleSize(165)}px;
  border-radius: ${scaleSize(1)}px;
  background-color: ${BACKGROUND_COLOR_SEC};
`;
