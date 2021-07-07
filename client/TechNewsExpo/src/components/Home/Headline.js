import React from "react";
import { View, FlatList } from "react-native";
import Title from "_components/common/Header";
import ImageCard from "_components/common/Card/ImageCard";
import { scaleSize } from "_styles/mixins";

const Headline = ({ data, title }) => {
  const renderCard = ({ item }) => <ImageCard data={item} type="headline" />;
  return (
    <View
      style={{
        marginTop: scaleSize(20),
      }}
    >
      <Title title={title} type="title" paddingLeft={true} />
      <FlatList
        contentContainerStyle={{
          marginTop: scaleSize(15),
          paddingHorizontal: scaleSize(10),
        }}
        data={data}
        initialNumToRender={3}
        renderItem={renderCard}
        keyExtractor={(_, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ margin: scaleSize(5) }} />}
      />
    </View>
  );
};

export default Headline;
