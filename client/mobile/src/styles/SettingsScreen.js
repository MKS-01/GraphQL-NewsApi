import styled from "styled-components/native";
import { FONT_FAMILY_SEMIBOLD } from "_styles/typography";
import { GRAY_MEDIUM } from "_styles/colors";
import { scaleSize, scaleFont } from "_styles/mixins";

export const OptionsContainer = styled.TouchableOpacity`
  background-color: rgba(0, 0, 0, 0.3);
  flex-direction: row;
  justify-content: space-between;
  padding: ${scaleSize(10)}px ${scaleSize(10)}px;
  border-radius: ${scaleSize(4)}px;
  align-items: center;
  margin-bottom: ${scaleSize(10)}px;
`;

export const OptionsText = styled.Text`
  font-size: ${scaleFont(14)}px;
  font-family: ${FONT_FAMILY_SEMIBOLD};
  color: ${GRAY_MEDIUM};
  text-transform: uppercase;
  margin-left: ${scaleSize(10)}px;
  letter-spacing: ${scaleFont(2)}px;
`;
