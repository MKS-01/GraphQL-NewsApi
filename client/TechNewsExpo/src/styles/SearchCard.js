import styled from "styled-components/native";
import { BACKGROUND_COLOR_SEC, TEXT_PRIMARY, PLACEHOLDER } from "./colors";
import { scaleFont, scaleSize } from "./mixins";
import { FONT_FAMILY_REGULAR } from "./typography";

export const Card = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  background-color: ${BACKGROUND_COLOR_SEC};
  height: ${scaleSize(100)}px;
  box-shadow: ${scaleSize(5)}px ${scaleSize(5)}px ${scaleSize(4)}px transparent;
  border-radius: ${scaleSize(2)}px;
`;

export const Title = styled.Text`
  font-size: ${scaleFont(16)}px;
  font-family: ${FONT_FAMILY_REGULAR};
  text-align: justify;
  color: ${TEXT_PRIMARY};
  flex-shrink: 1;
`;

export const TitleView = styled.View`
  flex: 1;
  display: flex;
  margin: ${scaleSize(8)}px ${scaleSize(12)}px;
`;

export const ImageContainer = styled.View`
  width: 34%;
  margin: ${scaleSize(8)}px 0 ${scaleSize(8)}px ${scaleSize(8)}px;
  background-color: ${(props) =>
    props.type === "empty" ? PLACEHOLDER : "transparent"};
`;

export const ImageCard = styled.Image`
  height: 100%;
  width: 100%;
  display: flex;
`;