import styled from "styled-components/native";
import { WHITE } from "./colors";
import { scaleSize, scaleFont } from "./mixins";
import { FONT_FAMILY_SEMIBOLD, FONT_SIZE_14 } from "./typography";

export const ImageText = styled.Text`
  font-size: ${(props) =>
    props.type === "headline" ? `${scaleFont(16)}px` : `${scaleFont(14)}px`};
  font-family: ${FONT_FAMILY_SEMIBOLD};
  text-align: justify;
  color: ${WHITE};
  flex-shrink: 1;
`;

export const TextContainer = styled.View`
  flex: 1;
  margin: ${scaleSize(10)}px;
  justify-content: flex-end;
`;

export const TextContainerBottom = styled.View`
  flex: 1;
  margin: ${scaleSize(6)}px ${scaleSize(2)}px;
  margin-bottom: 0;
  height: ${scaleSize(30)}px;
`;

export const ImageTextBottom = styled.Text`
  font-size: ${FONT_SIZE_14}px;
  font-family: ${FONT_FAMILY_SEMIBOLD};
  text-align: justify;
  color: ${WHITE};
  flex-shrink: 1;
`;
