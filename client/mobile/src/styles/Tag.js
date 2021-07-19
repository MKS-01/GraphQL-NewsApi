import styled from "styled-components/native";
import { FONT_FAMILY_SEMIBOLD } from "_styles/typography";
import { scaleSize, scaleFont } from "_styles/mixins";
import { GRAY_MEDIUM, PLACEHOLDER } from "_styles/colors";

export const TabContainer = styled.TouchableOpacity`
  background-color: ${GRAY_MEDIUM};
  padding: ${scaleSize(6)}px ${scaleSize(10)}px;
  width: auto;
  border-radius: ${scaleSize(25)}px;
  justify-content: center;
`;

export const TabText = styled.Text`
  font-size: ${scaleFont(12)}px;
  font-family: ${FONT_FAMILY_SEMIBOLD};
  font-weight: 800;
  color: ${PLACEHOLDER};
  text-transform: uppercase;
`;
