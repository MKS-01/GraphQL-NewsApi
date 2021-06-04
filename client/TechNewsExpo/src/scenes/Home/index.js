import React from "react";
import { View } from "react-native";
import { useQuery, gql } from "@apollo/client";
import NetworkConnection from "_utils/NetworkConnection";
import Loader from "_components/common/Loader";
import Error from "_components/common/Error";
import { RootScrollView, RootSafeArea } from "_styles/RootView";
import Headline from "_components/Home/Headline";
import Category from "_components/Home/Category";
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
    <RootSafeArea>
      <RootScrollView
        type={"detail"}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 25 }}
      >
        {/* <View style={{ margin: 5 }} /> */}
        <Headline data={articles} />
        <View style={{ margin: 10 }} />
        <Category data={apple.articles} type="category" title="Apple" />
        <View style={{ margin: 10 }} />
        <Category data={apple.articles} type="category2" title="Apple" />
      </RootScrollView>
    </RootSafeArea>
  );
};

export default HomeScreen;
