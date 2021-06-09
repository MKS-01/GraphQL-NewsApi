import React, { useState, useCallback } from "react";
import { RefreshControl } from "react-native";
import Detail from "_components/Detail";
import { RootScrollView } from "_styles/RootView";
import { GRAY_LIGHT } from "_styles/colors";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const DetailScreen = ({ route }) => {
  const [refreshing, setRefreshing] = useState(false);

  const { data } = route.params;

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(500).then(() => setRefreshing(false));
  }, []);

  return (
    <RootScrollView
      showsVerticalScrollIndicator={false}
      type="detail"
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={GRAY_LIGHT}
          colors={GRAY_LIGHT}
        />
      }
    >
      <Detail data={data} />
    </RootScrollView>
  );
};

export default DetailScreen;
