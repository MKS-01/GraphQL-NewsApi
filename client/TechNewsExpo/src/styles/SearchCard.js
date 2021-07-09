import styled from "styled-components/native";
import { BACKGROUND_COLOR_SEC, TEXT_PRIMARY, BACKGROUND_COLOR } from "./colors";
import { scaleFont, scaleSize } from "./mixins";
import { FONT_FAMILY_REGULAR } from "./typography";

export const Card = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  background-color: ${(props) =>
    props.tag ? `transparent` : BACKGROUND_COLOR_SEC};
  height: ${scaleSize(100)}px;
  box-shadow: ${scaleSize(5)}px ${scaleSize(5)}px ${scaleSize(4)}px transparent;
  border-radius: ${scaleSize(2)}px;
`;

export const Title = styled.Text`
  font-size: ${(props) =>
    props.tag ? `${scaleFont(15)}` : `${scaleFont(14)}`}px;
  font-family: ${FONT_FAMILY_REGULAR};
  text-align: justify;
  color: #cacaca;
  flex-shrink: 1;
`;

export const TitleView = styled.View`
  flex: 1;
  display: flex;
  margin: ${scaleSize(12)}px;
  margin: ${(props) => (props.tag ? `${scaleSize(13)}` : `${scaleSize(12)}`)}px;
`;

export const ImageContainer = styled.View`
  width: 34%;
  margin: ${scaleSize(8)}px 0 ${scaleSize(8)}px ${scaleSize(8)}px;
  background-color: ${(props) =>
    props.type === "empty" ? BACKGROUND_COLOR : "transparent"};
`;

export const ImageCard = styled.Image`
  height: 100%;
  width: 100%;
  display: flex;
  border-radius: ${scaleSize(2)}px;
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

  justify-content: flex-end;
  align-items: ${(props) => (props.tag ? `flex-start` : `flex-end`)};
`;
