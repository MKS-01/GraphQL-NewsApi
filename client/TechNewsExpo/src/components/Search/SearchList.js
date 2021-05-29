import React from "react";
import { View, Text, FlatList } from "react-native";
import SearchCard from "_components/Card/SearchCard";

const SearchList = ({ data }) => {
  const renderCard = ({ item }) => <SearchCard data={item} />;
  return (
    <>
      <FlatList
        style={{ marginTop: 10 }}
        data={data}
        initialNumToRender={10}
        renderItem={renderCard}
        keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={{ padding: 5 }} />}
      />
    </>
  );
};

export default SearchList;
