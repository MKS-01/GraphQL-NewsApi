import React, { useState, useCallback } from "react";
import { View, RefreshControl } from "react-native";
import { useQuery, gql } from "@apollo/client";
import NetworkConnection from "_utils/NetworkConnection";
import Loader from "_components/common/Loader";
import Error from "_components/common/Error";
import Topic from "_components/Topic";
import Title from "_components/common/Header";
import { RootScrollView, RootSafeArea } from "_styles/RootView";
import Headline from "_components/Home/Headline";
import Category from "_components/Home/Category";
import { GRAY_LIGHT } from "_styles/colors";
import { scaleSize } from "_styles/mixins";

const TOP_HEADLINES = gql`
  query topHeadlines($input: NewsAPIInput) {
    topHeadlines(input: $input) {
      id
      author
      title
      description
      url
      urlToImage
      publishedAt
      content
    }
  }
`;

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [category, setCategory] = useState("TECHNOLOGY");

  let network = NetworkConnection();

  const { loading, error, data, refetch } = useQuery(TOP_HEADLINES, {
    fetchPolicy: "no-cache",
    variables: {
      input: {
        language: "EN",
        category: category,
      },
    },
  });

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // refetch();
    wait(500).then(() => setRefreshing(false));
  }, []);

  if (network === false) {
    return <Error network={true} />;
  }

  if (loading) return <Loader />;

  if (error) return <Error error={error} />;
  // TODO:replace with settings
  const selectedTopic = ["apple", "ign", "cnet"];

  return (
    <RootSafeArea>
      <RootScrollView
        type={"detail"}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: scaleSize(25) }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={GRAY_LIGHT}
            // colors={GRAY_LIGHT}
          />
        }
      >
        <View style={{ marginTop: scaleSize(10) }} />
        <Title title={"Home"} type="sub-title" paddingLeft={true} />
        <Topic />
        <View style={{ marginTop: scaleSize(10) }} />

        <Headline data={data.topHeadlines} title={"Top Headlines"} />
        {/*TODO:dynamic component */}
        {selectedTopic.map((val, index) => {
          return (
            <Category
              title={val}
              key={val}
              type={index + 1}
              category={category}
            />
          );
        })}
      </RootScrollView>
    </RootSafeArea>
  );
};

export default HomeScreen;
