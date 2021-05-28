import styled from "styled-components/native";
import { TEXT_PRIMARY } from "./colors";
import { scaleSize } from "./mixins";
import {
  TITLE_FONT_SIZE,
  FONT_FAMILY_BOLD,
  SUBTITLE_FONT_SIZE,
} from "./typography";

export const TitleText = styled.Text`
  /* padding: ${scaleSize(15)}px; */
  /* margin: ${scaleSize(12)}px 0; */
  font-family: ${FONT_FAMILY_BOLD};
  color: ${TEXT_PRIMARY};
  font-size: ${(props) =>
    props.type === "title"
      ? `${TITLE_FONT_SIZE}px`
      : `${SUBTITLE_FONT_SIZE}px`};
  text-transform: uppercase;
`;
