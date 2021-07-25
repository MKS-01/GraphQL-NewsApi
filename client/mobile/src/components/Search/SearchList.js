import React, { useState, useCallback } from "react";
import { View, FlatList, RefreshControl } from "react-native";
import SearchCard from "_components/common/Card/SearchCard";
import { GRAY_LIGHT } from "_styles/colors";
import { scaleSize } from "_styles/mixins";

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
        contentContainerStyle={{
          marginTop: scaleSize(10),
          paddingBottom: scaleSize(20),
        }}
        data={data}
        initialNumToRender={10}
        renderItem={renderCard}
        keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={{ margin: scaleSize(5) }} />}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={GRAY_LIGHT}
            // colors={GRAY_LIGHT}
          />
        }
      />
    </>
  );
};

export default SearchList;
