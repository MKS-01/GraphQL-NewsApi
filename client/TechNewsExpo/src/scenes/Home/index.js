import React from "react";
import { FlatList, View } from "react-native";
import { useQuery, gql } from "@apollo/client";
import NetworkConnection from "_utils/NetworkConnection";
import Loader from "_components/common/Loader";
import Error from "_components/common/Error";
import Title from "_components/common/Header";
import { RootScrollView } from "_styles/RootView";
import ImageCard from "_components/Card/ImageCard";
import { headline } from "../../json/topHeadlines";
import { apple } from "../../json/apple";

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

const HomeScreen = () => {
  let network = NetworkConnection();
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  const { articles } = headline;

  if (network === false) {
    return <Error network={true} />;
  }

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;

  return (
    <RootScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 25 }}
    >
      <Headline data={articles} />
      <View style={{ margin: 10 }} />
      <Category data={apple.articles} type="category" title="Apple" />
      <View style={{ margin: 10 }} />
      <Category data={apple.articles} type="category2" title="Apple" />
    </RootScrollView>
  );
};

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
        ItemSeparatorComponent={() => <View style={{ padding: 7 }} />}
      />
    </>
  );
};

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

export default HomeScreen;

{
  /* <Title title={"Top Headlines"} type="sub-title" /> */
}
