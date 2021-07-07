import React from "react";
import { View, Text } from "react-native";
import { TabContainer, TabText } from "_styles/Tag";

const Tag = ({ topic }) => {
  return (
    <TabContainer onPress={() => console.log("")}>
      <TabText>{topic}</TabText>
    </TabContainer>
  );
};

export default Tag;
