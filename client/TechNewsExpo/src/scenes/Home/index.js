import React from "react";
import { View, Text } from "react-native";
import { useQuery, gql } from "@apollo/client";
import Loader from "_components/common/Loader";
import Error from "_components/common/Error";

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

const HomeScreen = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* {data.rates.map(({currency, rate}) =>
        console.log(`${currency + ':' + rate}`),
      )} */}
      <Text key={data.rates[0].currency}>
        {data.rates[0].currency}: {data.rates[0].rate}
      </Text>
    </View>
  );
};

export default HomeScreen;
