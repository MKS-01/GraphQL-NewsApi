import React from "react";
import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Tag from "_components/common/Tag";
import { scaleSize } from "_styles/mixins";
import { FAV_TAGS } from "_constants/FavTag";

const Topic = () => {
  const navigation = useNavigation();

  const renderTags = ({ item }) => (
    <Tag
      tag
      topic={item.topic}
      onPress={() => navigation.push("Tag", { topic: item.topic })}
    />
  );

  return (
    <FlatList
      contentContainerStyle={{
        marginTop: scaleSize(10),
        paddingHorizontal: scaleSize(10),
      }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={FAV_TAGS}
      initialNumToRender={10}
      renderItem={renderTags}
      keyExtractor={(_, index) => index.toString()}
      ItemSeparatorComponent={() => <View style={{ margin: scaleSize(3) }} />}
    />
  );
};

export default Topic;
