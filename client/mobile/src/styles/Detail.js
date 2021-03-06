import styled from "styled-components/native";
import {
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_SEMIBOLD,
} from "./typography";
import { TEXT_PRIMARY, TEXT_SECONDARY, TEXT_THIRD } from "./colors";
import { scaleFont, scaleSize } from "./mixins";

export const RootContainer = styled.View`
  display: flex;
  flex-direction: column;
`;

export const BodyContainer = styled.View`
  display: flex;
  flex-direction: column;
  padding: ${scaleSize(15)}px;
  justify-content: space-around;
`;

export const DescriptionText = styled.Text`
  color: ${(props) => (props.type === "title" ? TEXT_SECONDARY : TEXT_THIRD)};
  font-size: ${(props) =>
    props.type === "title" ? scaleFont(18) : scaleFont(14)}px;
  font-family: ${(props) =>
    props.type === "title" ? FONT_FAMILY_BOLD : FONT_FAMILY_REGULAR};
  font-weight: ${(props) => (props.type === "title" ? 600 : 400)};
  line-height: ${(props) =>
    props.type === "title" ? scaleFont(24) : scaleFont(18)}px;
  text-align: justify;
  flex-shrink: 1;
  margin-bottom: ${scaleSize(5)}px;
  text-transform: ${(props) =>
    props.type === "title" ? `uppercase` : `capitalize`};
`;

export const ReadMoreTouchable = styled.TouchableOpacity`
  padding: ${scaleSize(10)}px 0;
`;

export const ReadMoreText = styled.Text`
  font-size: ${scaleFont(14)}px;
  color: #3373fa;
`;

export const HeaderContainer = styled.View`
  height: ${scaleSize(60)}px;
  margin-top: ${scaleSize(50)}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 ${scaleSize(15)}px;
`;

export const HeaderTouchable = styled.TouchableOpacity`
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  height: ${scaleSize(50)}px;
  width: ${scaleSize(50)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${scaleSize(12)}px;
`;
