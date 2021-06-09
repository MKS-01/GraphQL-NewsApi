import React, { useState, useCallback } from "react";
import { View, RefreshControl } from "react-native";
import { useQuery, gql } from "@apollo/client";
import NetworkConnection from "_utils/NetworkConnection";
import Loader from "_components/common/Loader";
import Error from "_components/common/Error";
import { RootScrollView, RootSafeArea } from "_styles/RootView";
import Headline from "_components/Home/Headline";
import Category from "_components/Home/Category";
import { headline, apple, startup } from "../../json/mockData";
import { GRAY_LIGHT } from "_styles/colors";

// const EXCHANGE_RATES = gql`
//   query GetExchangeRates {
//     rates(currency: "USD") {
//       currency
//       rate
//     }
//   }
// `;

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
  // const { loading, error, data } = useQuery(EXCHANGE_RATES);

  const { articles } = headline;

  if (network === false) {
    return <Error network={true} />;
  }

  // if (loading) return <Loader />;
  // if (error)
  //   return (
  //     <Error
  //     // error={error}
  //     />
  //   );

  return (
    <RootSafeArea>
      <RootScrollView
        type={"detail"}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 25 }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={GRAY_LIGHT}
            colors={GRAY_LIGHT}
          />
        }
      >
        <View style={{ margin: 5 }} />
        <Headline data={articles} />
        <View style={{ margin: 10 }} />
        <Category data={apple.articles} type="category" title="Apple" />
        <View style={{ margin: 10 }} />
        <Category data={startup.articles} type="category2" title="Startup" />
      </RootScrollView>
    </RootSafeArea>
  );
};

export default HomeScreen;
