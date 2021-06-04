import styled from "styled-components/native";
import { BACKGROUND_COLOR } from "./colors";
import { scaleSize } from "./mixins";

export const RootScrollView = styled.ScrollView`
  flex: 1;
  padding: ${(props) => (props.type === "detail" ? 0 : `${scaleSize(10)}`)}px;
  background-color: ${BACKGROUND_COLOR};
`;

export const Container = styled.View`
  flex: 1;
  padding: 0 ${scaleSize(10)}px;
  background-color: ${BACKGROUND_COLOR};
`;

export const RootSafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${BACKGROUND_COLOR};
`;
