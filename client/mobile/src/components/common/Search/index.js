import React from "react";
import { Search } from "_styles/Search";

const SearchBar = (props) => {
  const { placeholder, value, onChangeText } = props;

  return (
    <Search
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default SearchBar;
