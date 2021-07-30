import styled from "styled-components/native";
import { scaleSize } from "./mixins";
import { TEXT_PRIMARY, BACKGROUND_COLOR, GRAY_LIGHT } from "./colors";
import { FONT_FAMILY_SEMIBOLD, FONT_SIZE_16 } from "./typography";

export const ErrorText = styled.Text`
  font-family: ${FONT_FAMILY_SEMIBOLD};
  color: ${GRAY_LIGHT};
  font-size: ${FONT_SIZE_16}px;
  text-align: center;
`;

export const ErrorContainer = styled.View`
  width: 85%;
  justify-content: center;
  align-items: center;
`;

export const ErrorImage = styled.Image`
  height: ${scaleSize(70)}px;
  width: ${scaleSize(70)}px;
  margin-bottom: ${scaleSize(10)}px;
`;

export const Container = styled.View`
  flex: 1;
  /* padding: ${scaleSize(15)}px; */
  justify-content: center;
  align-items: center;
  background-color: ${BACKGROUND_COLOR};
`;
