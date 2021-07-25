import styled from "styled-components/native";
import { FONT_FAMILY_BOLD } from "_styles/typography";
import { TEXT_PRIMARY } from "_styles/colors";
import { scaleSize, scaleFont } from "_styles/mixins";
import { Platform } from "react-native";

export const ProfileContainer = styled.View`
  margin-top: ${Platform.OS === "ios" ? scaleSize(35) : scaleSize(40)}px;
  align-items: center;
`;

export const ProfilePic = styled.Image`
  width: ${scaleSize(72)}px;
  height: ${scaleSize(72)}px;
`;

export const ProfileUsername = styled.Text`
  font-size: ${scaleFont(14)}px;
  color: ${TEXT_PRIMARY};
  font-family: ${FONT_FAMILY_BOLD};
  margin-top: ${scaleSize(5)}px;
  letter-spacing: ${scaleFont(5)}px;
`;
