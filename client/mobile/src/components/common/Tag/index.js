import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TabContainer, TabText } from "_styles/Tag";

const Tag = ({ topic }) => {
  const navigation = useNavigation();

  return (
    <TabContainer onPress={() => navigation.push("Tag", { topic: topic })}>
      <TabText>{topic}</TabText>
    </TabContainer>
  );
};

export default Tag;
