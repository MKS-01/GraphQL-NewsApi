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
import {
  headline,
  apple,
  startup,
  macbookPro,
  ign,
  playstations,
} from "../../json/mockData";
import { GRAY_LIGHT } from "_styles/colors";
import { scaleSize } from "_styles/mixins";

// const EXCHANGE_RATES = gql`
//   query GetExchangeRates {
//     rates(currency: "USD") {
//       currency
//       rate
//     }
//   }
// `;


const TOP_HEADLINES = gql`
query topHeadlines{
  topHeadlines(input: {
    language: EN,
    category: TECHNOLOGY
  }) {
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
`


// const APPLE_HEADLINES = gql`
// query topHeadlines{
//   topHeadlines(input: {
//     language: EN,
//     category: TECHNOLOGY
//     query:"Apple"
//   }) {
//     id
//     author
//     title
//     description
//     url
//     urlToImage
//     publishedAt
//     content
//   }
// }
// `

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(500).then(() => setRefreshing(false));
  }, []);

  let network = NetworkConnection();
  
  // const { loading, error, data } = useQuery(TOP_HEADLINES);
    const loading = true;
  // if (network === false) {
  //   return <Error network={true} />;
  // }

  if (loading) return <Loader />;

  // if (error)
  //   return (
  //     <Error
  //     error={error}
  //     />
  //   );

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
  
  
        {/* <Headline data={data.topHeadlines} title={"Top Headlines"} /> */}
        {/*TODO:dynamic component */}
        {/* <Category data={apple.articles} type="category" title="Apple" />
        <Category data={ign.articles} type="category" title="IGN" />
        <Category data={startup.articles} type="category2" title="Startup" /> */}

        {/*  */}
      </RootScrollView>
    </RootSafeArea>
  );
};

export default HomeScreen;
