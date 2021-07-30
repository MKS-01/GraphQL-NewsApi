import React from "react";
import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Tag from "_components/common/Tag";

import { scaleSize } from "_styles/mixins";

//TODO:backend
const tagsData = [
  {
    id: 1,
    topic: "PlayStations",
  },
  {
    id: 2,
    topic: "Mobile",
  },
  {
    id: 3,
    topic: "Acquisition",
  },
  {
    id: 4,
    topic: "Data Breach",
  },
  {
    id: 5,
    topic: "EV",
  },
  {
    id: 6,
    topic: "iPhone",
  },
  {
    id: 7,
    topic: "Macbook Pro",
  },
  {
    id: 8,
    topic: "5G",
  },
  {
    id: 9,
    topic: "Tech Crunch",
  },
  {
    id: 10,
    topic: "Crypto",
  },
];

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
      data={tagsData}
      initialNumToRender={10}
      renderItem={renderTags}
      keyExtractor={(_, index) => index.toString()}
      ItemSeparatorComponent={() => <View style={{ margin: scaleSize(3) }} />}
    />
  );
};

export default Topic;
