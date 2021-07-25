import styled from "styled-components/native";
import { FONT_FAMILY_REGULAR } from "_styles/typography";
import { BACKGROUND_COLOR_SEC } from "./colors";
import { scaleFont, scaleSize } from "./mixins";

export const Card = styled.TouchableOpacity`
  flex: 1;
  margin: ${scaleSize(4)}px;
  flex-direction: column;
`;

export const Image = styled.Image`
  height: ${scaleSize(165)}px;
  border-radius: ${scaleSize(4)}px;
`;

export const Text = styled.Text`
  font-size: ${scaleFont(12)}px;
  color: #cacaca;
  margin: ${scaleSize(0)}px ${scaleSize(2)}px;
  margin-top: ${scaleSize(6)}px;
  margin-bottom: ${scaleSize(3)}px;
  font-family: ${FONT_FAMILY_REGULAR};
  letter-spacing: 1px;
  text-align: justify;
`;

export const ImageContainer = styled.View`
  height: ${scaleSize(165)}px;
  border-radius: ${scaleSize(4)}px;
  background-color: ${BACKGROUND_COLOR_SEC};
`;

export const DateText = styled.Text`
  font-size: ${scaleFont(12)}px;
  font-family: ${FONT_FAMILY_REGULAR};
  text-align: justify;
  color: #8a8a8a;
  flex-shrink: 1;
`;

export const DateTextContainer = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
  margin-bottom: ${scaleSize(4)}px;
  margin-right: ${scaleSize(2)}px;
`;
