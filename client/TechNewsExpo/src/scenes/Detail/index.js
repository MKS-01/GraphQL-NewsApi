import React from "react";
import Detail from "_components/Detail";
import { RootScrollView } from "_styles/RootView";

const DetailScreen = ({ route }) => {
  const { data } = route.params;

  return (
    <RootScrollView showsVerticalScrollIndicator={false} type="detail">
      <Detail data={data} />
    </RootScrollView>
  );
};

export default DetailScreen;
