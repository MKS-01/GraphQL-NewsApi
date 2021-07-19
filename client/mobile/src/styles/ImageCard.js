import styled from "styled-components/native";
import { WHITE, GRAY_LIGHT } from "./colors";
import { scaleSize, scaleFont } from "./mixins";
import {
  FONT_FAMILY_BOLD,
  FONT_FAMILY_SEMIBOLD,
  FONT_FAMILY_REGULAR,
  FONT_SIZE_12,
} from "./typography";

export const ImageFirstText = styled.Text`
  font-size: ${scaleFont(50)}px;
  font-family: ${FONT_FAMILY_BOLD};
  color: ${GRAY_LIGHT};
  text-transform: uppercase;
`;

export const ImageText = styled.Text`
  font-size: ${(props) =>
    props.type === "headline" ? `${scaleFont(14)}px` : `${scaleFont(12)}px`};
  font-family: ${FONT_FAMILY_SEMIBOLD};
  text-align: justify;
  color: ${(props) => (props.type === "headline" ? `#cacaca` : GRAY_LIGHT)};
  flex-shrink: 1;
  text-transform: uppercase;
`;

export const TextContainer = styled.View`
  position: absolute;
  bottom: ${scaleSize(15)}px;
  left: ${scaleSize(10)}px;
  right: ${scaleSize(10)}px;
`;

export const TextContainerBottom = styled.View`
  flex: 1;
  margin: ${scaleSize(6.2)}px ${scaleSize(2.5)}px;
  margin-bottom: 0;
  /* height: ${scaleSize(30)}px; */
`;

export const ImageTextBottom = styled.Text`
  font-size: ${FONT_SIZE_12}px;
  font-family: ${FONT_FAMILY_SEMIBOLD};
  text-transform: uppercase;
  text-align: justify;
  color: ${GRAY_LIGHT};
  flex-shrink: 1;
  letter-spacing: ${scaleFont(0.1)}px;
`;

export const TextContainerCategory = styled.View`
  position: absolute;
  bottom: 0;
  left: ${scaleSize(15)}px;
  right: ${scaleSize(15)}px;
  justify-content: flex-end;
  margin-bottom: ${scaleSize(10)}px;
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
  margin-top: ${scaleSize(2)}px;
`;
