import React from "react";
import { TabContainer, TabText } from "_styles/Tag";

const Tag = ({ topic, onPress, tag, styleTabContainer, styleTabText }) => {
  return (
    <TabContainer onPress={onPress} tag={tag} style={styleTabContainer}>
      <TabText tag={tag} style={styleTabText}>
        {topic}
      </TabText>
    </TabContainer>
  );
};

export default Tag;
