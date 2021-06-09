import React, { useState, useCallback } from "react";
import { View, FlatList, RefreshControl } from "react-native";
import SearchCard from "_components/Card/SearchCard";
import { GRAY_LIGHT } from "_styles/colors";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const SearchList = ({ data }) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(500).then(() => setRefreshing(false));
  }, []);

  const renderCard = ({ item }) => <SearchCard data={item} />;
  return (
    <>
      <FlatList
        contentContainerStyle={{ marginTop: 10 }}
        data={data}
        initialNumToRender={10}
        renderItem={renderCard}
        keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={{ margin: 5 }} />}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={GRAY_LIGHT}
            colors={GRAY_LIGHT}
          />
        }
      />
    </>
  );
};

export default SearchList;
