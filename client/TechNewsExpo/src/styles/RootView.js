import styled from "styled-components/native";
import { BACKGROUND_COLOR } from "./colors";
import { scaleSize } from "./mixins";

export const RootScrollView = styled.ScrollView`
  padding: ${scaleSize(15)}px;
`;

export const RootView = styled.View`
  flex: 1;
  padding: ${scaleSize(15)}px;
  background-color: ${(props) =>
    props.theme.rootBackground || BACKGROUND_COLOR};
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
