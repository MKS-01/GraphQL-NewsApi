import React from "react";
import { View, FlatList } from "react-native";
import Title from "_components/common/Header";
import ImageCard from "_components/common/Card/ImageCard";
import { scaleSize } from "_styles/mixins";
import { useQuery, gql } from "@apollo/client";
import { TOP_HEADLINES } from "_services/GraphQL/query";

const Category = ({ type, title, category }) => {
  const { loading, error, data, refetch } = useQuery(TOP_HEADLINES, {
    fetchPolicy: "no-cache",
    variables: {
      input: {
        language: "EN",
        category: category,
        query: title,
      },
    },
  });

  if (loading) return <View />;

  if (error) return <View />;

  const renderCard = ({ item }) => (
    <ImageCard data={item} type={type % 3 == 0 ? "category2" : "category"} />
  );

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
        data={data.topHeadlines}
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
