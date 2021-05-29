import React from "react";
import { View, FlatList } from "react-native";
import Title from "_components/common/Header";
import ImageCard from "_components/Card/ImageCard";

const Headline = ({ data }) => {
  const renderCard = ({ item }) => <ImageCard data={item} type="headline" />;
  return (
    <>
      <Title title={"Top Headlines"} type="title" />
      <FlatList
        style={{ marginTop: 10 }}
        data={data}
        initialNumToRender={3}
        renderItem={renderCard}
        keyExtractor={(_, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ margin: 7 }} />}
      />
    </>
  );
};

export default Headline;