import styled from "styled-components/native";
import { WHITE, GRAY_LIGHT } from "./colors";
import { scaleSize, scaleFont } from "./mixins";
import { FONT_FAMILY_SEMIBOLD, FONT_SIZE_12 } from "./typography";

export const ImageText = styled.Text`
  font-size: ${(props) =>
    props.type === "headline" ? `${scaleFont(15)}px` : `${scaleFont(12)}px`};
  font-family: ${FONT_FAMILY_SEMIBOLD};
  text-align: justify;
  color: ${GRAY_LIGHT};
  flex-shrink: 1;
  text-transform: uppercase;
`;

export const TextContainer = styled.View`
  flex: 1;
  margin: ${scaleSize(10)}px;
  justify-content: flex-end;
  /* margin-bottom: 30; */
  margin-bottom: ${(props) =>
    props.type === "headline" ? `${scaleSize(25)}` : `${scaleSize(10)}`}px;
`;

export const TextContainerBottom = styled.View`
  flex: 1;
  margin: ${scaleSize(6.2)}px ${scaleSize(2.5)}px;
  margin-bottom: 0;
  height: ${scaleSize(30)}px;
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
