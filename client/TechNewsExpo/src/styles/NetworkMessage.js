import styled from "styled-components/native";
import { scaleSize } from "./mixins";
import { TEXT_PRIMARY } from "./colors";
import { FONT_FAMILY_SEMIBOLD, FONT_SIZE_16 } from "./typography";

export const ErrorText = styled.Text`
  font-family: ${FONT_FAMILY_SEMIBOLD};
  color: ${TEXT_PRIMARY};
  font-size: ${FONT_SIZE_16}px;
  text-align: center;
`;

export const ErrorContainer = styled.View`
  width: 70%;
  justify-content: center;
  align-items: center;
`;

export const ErrorImage = styled.Image`
  height: ${scaleSize(70)}px;
  width: ${scaleSize(70)}px;
  margin-bottom: ${scaleSize(10)}px;
`;
