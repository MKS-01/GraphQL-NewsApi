import styled from "styled-components/native";
import { FONT_FAMILY_SEMIBOLD, FONT_FAMILY_REGULAR } from "_styles/typography";
import {
  BACKGROUND_COLOR,
  BACKGROUND_COLOR_SEC,
  GRAY_DARK,
  TEXT_PRIMARY,
} from "./colors";
import { scaleFont, scaleSize } from "./mixins";

export const PressableContainer = styled.Pressable`
  background-color: ${GRAY_DARK};
  padding: ${scaleSize(12)}px 0px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

export const PressableText = styled.Text`
  font-size: ${scaleFont(16)}px;
  font-weight: 600;
  color: #1c1c1e;
  font-family: ${FONT_FAMILY_SEMIBOLD};
  letter-spacing: 1px;
  text-transform: uppercase;
`;
