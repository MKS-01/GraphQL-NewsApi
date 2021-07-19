import React from "react";
import { View, FlatList } from "react-native";
import Title from "_components/common/Header";
import ImageCard from "_components/common/Card/ImageCard";
import { scaleSize } from "_styles/mixins";

const Category = ({ data, type, title }) => {
  const renderCard = ({ item }) => <ImageCard data={item} type={type} />;
  return (
    <View
      style={{
        flex: 1,
        marginTop: scaleSize(20),
      }}
    >
      <Title title={title} type="sub-title" paddingLeft={true} />
      <FlatList
        contentContainerStyle={{
          marginTop: scaleSize(10),
          paddingHorizontal: scaleSize(10),
        }}
        data={data}
        renderItem={renderCard}
        initialNumToRender={3}
        keyExtractor={(_, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ margin: scaleSize(5) }} />}
      />
    </View>
  );
};
export default Category;
