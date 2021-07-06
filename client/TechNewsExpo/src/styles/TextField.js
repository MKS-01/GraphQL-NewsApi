import styled from "styled-components/native";
import { FONT_FAMILY_SEMIBOLD, FONT_FAMILY_REGULAR } from "_styles/typography";
import { scaleSize, scaleFont } from "_styles/mixins";
import { GRAY_DARK, GRAY_MEDIUM } from "_styles/colors";

export const TextInput = styled.TextInput`
  width: 100%;
  height: ${scaleSize(48)}px;
  border-radius: ${scaleSize(6)}px;
  padding: 0 ${scaleSize(16)}px;
  color: ${GRAY_DARK};
  font-family: ${FONT_FAMILY_REGULAR};
  font-size: ${scaleFont(16)}px;
  letter-spacing: 0;
  line-height: ${scaleFont(19)}px;
  background-color: #18181a;
  margin-top: ${scaleSize(12)}px;
  margin-bottom: ${scaleSize(20)}px;
`;

export const TextInputHeader = styled.Text`
  color: ${GRAY_MEDIUM};
  font-family: ${FONT_FAMILY_SEMIBOLD};
  font-size: ${scaleFont(12)}px;
  font-weight: 600;
  letter-spacing: ${scaleFont(1.54)}px;
  line-height: ${scaleFont(14)}px;
  text-transform: uppercase;
  margin-left: 5px;
`;
