import React from "react";
import { useQuery, gql } from "@apollo/client";
import NetworkConnection from "_utils/NetworkConnection";
import Loader from "_components/common/Loader";
import Error from "_components/common/Error";
import Title from "_components/common/Header";
import { RootScrollView } from "_styles/RootView";

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

  if (network === false) {
    return <Error network={true} />;
  }

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;

  return (
    <RootScrollView>
      <Title title={"Top Headlines"} type="title" />
    </RootScrollView>
  );
};

export default HomeScreen;

{
  /* <Title title={"Top Headlines"} type="sub-title" /> */
}
