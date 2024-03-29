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
import { CARD_TYPE } from "_constants/Card";
import HomeLoader from "_components/Loader/Home";
import { GRAY_LIGHT } from "_styles/colors";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [category, setCategory] = useState("TECHNOLOGY");
  // TODO:replace with settings
  const [list, setList] = useState([
    {
      id: "1",
      type: "topHeadlines",
      topic: "TECHNOLOGY",
    },
    {
      id: "2",
      type: "category",
      topic: "gaming",
    },
    {
      id: "3",
      type: "category",
      topic: "ps5",
    },
    {
      id: "4",
      type: "category",
      topic: "apple",
    },
  ]);

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
    refetch();
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
        {/* <HomeLoader /> */}
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
    switch (item.type) {
      case CARD_TYPE.topHeadlines:
        return <Headline data={data.topHeadlines} title={"Top Headlines"} />;
      case CARD_TYPE.category:
        return <Category title={item.topic} type={index} category={category} />;
    }
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
        ListHeaderComponent={<Topic />}
        data={list}
        renderItem={renderCategory}
        keyExtractor={(item, index) => String(index)}
        initialNumToRender={5}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={GRAY_LIGHT}
            // colors={GRAY_LIGHT}
          />
        }
      />
    </RootSafeArea>
  );
};

export default HomeScreen;
