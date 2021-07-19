import styled from "styled-components/native";
import { TEXT_PRIMARY } from "./colors";
import { scaleFont, scaleSize } from "./mixins";
import {
  TITLE_FONT_SIZE,
  FONT_FAMILY_BOLD,
  SUBTITLE_FONT_SIZE,
} from "./typography";

export const TitleText = styled.Text`
  font-family: ${FONT_FAMILY_BOLD};
  color: ${TEXT_PRIMARY};
  font-size: ${(props) =>
    props.type === "title"
      ? `${TITLE_FONT_SIZE}px`
      : `${SUBTITLE_FONT_SIZE}px`};
  text-transform: uppercase;

  padding-left: ${(props) => (props.paddingLeft ? `${scaleSize(10)}px` : 0)};
  letter-spacing: ${scaleFont(2)}px;
`;
