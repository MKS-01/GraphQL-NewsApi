import React from "react";
import { View, FlatList } from "react-native";
import BookmarkCard from "_components/Card/BookmarkCard";

const BookmarkList = ({ data }) => {
  const renderCard = ({ item }) => <BookmarkCard data={item} />;
  return (
    <>
      <FlatList
        style={{
          marginTop: 10,
        }}
        data={data}
        initialNumToRender={10}
        numColumns={2}
        columnWrapperStyle={() => <View style={{ margin: 7, backgroundCol }} />}
        renderItem={renderCard}
        keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={{ margin: 2 }} />}
      />
    </>
  );
};

export default BookmarkList;
