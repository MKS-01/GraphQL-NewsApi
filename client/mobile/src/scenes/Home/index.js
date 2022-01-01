import React, { useState, useCallback, useEffect } from "react";
import { View, RefreshControl, FlatList } from "react-native";
import { useQuery } from "@apollo/client";
import NetworkConnection from "_utils/NetworkConnection";
import Loader from "_components/common/Loader";
import Error from "_components/common/Error";
import Topic from "_components/Topic";
import Title from "_components/common/Header";
import { RootScrollView, RootSafeArea } from "_styles/RootView";
import Headline from "_components/Home/Headline";
import Category from "_components/Home/Category";
import { scaleSize } from "_styles/mixins";
import { TOP_HEADLINES } from "_services/GraphQL/query";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [category, setCategory] = useState("TECHNOLOGY");

  // TODO:replace with settings
  const selectedTopic = ["apple", "ces", "ign"];

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

  if (loading)
    return (
      <RootSafeArea>
        <View style={{ marginTop: scaleSize(10) }} />
        <Title title={"Home"} type="sub-title" paddingLeft={true} />
        <Loader />
      </RootSafeArea>
    );

  if (error)
    return (
      <RootSafeArea>
        <View style={{ marginTop: scaleSize(10) }} />
        <Title title={"Home"} type="sub-title" paddingLeft={true} />
        <Error error={error} />
      </RootSafeArea>
    );

  const renderCategory = ({ item, index }) => {
    return (
      <Category
        title={item}
        key={item}
        type={index - 1}
        category={category}
        // categoryData={categoryData.topHeadlines}
      />
    );
  };

  return (
    <RootSafeArea>
      <View style={{ marginTop: scaleSize(10) }} />
      <Title title={"Home"} type="sub-title" paddingLeft={true} />
      <FlatList
        contentContainerStyle={{
          marginTop: scaleSize(10),
          paddingBottom: scaleSize(30),
        }}
        ListHeaderComponent={
          <>
            <Topic />
            <Headline data={data.topHeadlines} title={"Top Headlines"} />
          </>
        }
        data={selectedTopic}
        renderItem={renderCategory}
        keyExtractor={(item, index) => String(index)}
        initialNumToRender={5}
      />
    </RootSafeArea>
  );
};

export default HomeScreen;
