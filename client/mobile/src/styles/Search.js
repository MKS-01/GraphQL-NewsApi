import styled from "styled-components/native";
import { scaleSize } from "./mixins";
import { SearchBar } from "react-native-elements";
import { FONT_FAMILY_SEMIBOLD } from "./typography";
import { BACKGROUND_COLOR_SEC, PLACEHOLDER, TEXT_PRIMARY } from "./colors";

export const Search = styled(SearchBar).attrs((props) => ({
  containerStyle: {
    padding: scaleSize(1),
    backgroundColor: BACKGROUND_COLOR_SEC,
    borderWidth: 0,
    shadowColor: "transparent",
    borderColor: "transparent",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    borderRadius: scaleSize(5),
    height: scaleSize(40),
    justifyContent: "center",
    marginTop: scaleSize(10),
    marginBottom: scaleSize(10),
  },

  inputContainerStyle: {
    backgroundColor: "transparent",
    borderWidth: 0,
    borderRadius: 0,
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
  },
  inputStyle: {
    fontFamily: FONT_FAMILY_SEMIBOLD,
    fontSize: scaleSize(14),
    borderWidth: 0,
    color: TEXT_PRIMARY,
  },
  searchIcon: {
    size: scaleSize(20),
    color: PLACEHOLDER,
  },
  placeholderTextColor: PLACEHOLDER,
}))``;
