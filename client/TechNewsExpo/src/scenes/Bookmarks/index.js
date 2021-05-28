import React from "react";
import { View, Text } from "react-native";
import NetworkConnection from "_utils/NetworkConnection";
import Error from "_components/common/Error";

const BookmarksScreen = () => {
  let network = NetworkConnection();

  if (network === false) {
    return <Error network={true} />;
  }

  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default BookmarksScreen;
