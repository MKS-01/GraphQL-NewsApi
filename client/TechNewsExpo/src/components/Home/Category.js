import React from "react";
import { View, FlatList } from "react-native";
import Title from "_components/common/Header";
import ImageCard from "_components/Card/ImageCard";

const Category = ({ data, type, title }) => {
  const renderCard = ({ item }) => <ImageCard data={item} type={type} />;
  return (
    <>
      <Title title={title} type="sub-title" />
      <FlatList
        style={{ marginTop: 10 }}
        data={data}
        renderItem={renderCard}
        initialNumToRender={3}
        keyExtractor={(_, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ padding: 7 }} />}
      />
    </>
  );
};
export default Category;
