import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Error from "_components/common/Error";
import Tag from "_components/common/Tag";
import Title from "_components/common/Header";
import NetworkConnection from "_utils/NetworkConnection";
import { Container, RootSafeArea, RootScrollView } from "_styles/RootView";
import { scaleSize, scaleFont } from "_styles/mixins";
import { HeaderTouchable } from "_styles/Detail";
import { FONT_FAMILY_REGULAR } from "_styles/typography";
import { GRAY_MEDIUM, PLACEHOLDER, WHITE } from "_styles/colors";

const topics = [
  {
    type: "TECHNOLOGY",
    topics: [
      { val: "apple", selected: true },
      { val: "ign", selected: true },
      { val: "malware", selected: true },
      { val: "techcrunch", selected: false },
      { val: "mobile", selected: false },
      { val: "crypto", selected: false },
    ],
  },
  {
    type: "SPORTS",
    topics: [
      { val: "cricket", selected: true },
      { val: "olympic", selected: true },
      { val: "football", selected: true },
    ],
  },
  {
    type: "BUSINESS",
    topics: [
      { val: "stock", selected: true },
      { val: "acquistion", selected: true },
      { val: "economic", selected: true },
    ],
  },
];

const ChangeTopic = () => {
  const navigation = useNavigation();
  const [selectedTopic, setSelectedTopic] = useState([]);

  let network = NetworkConnection();

  if (network === false) {
    return <Error network={true} />;
  }

  useEffect(() => {
    //TODO:type === "TECHNOLOGY" replace with hook
    const topic = topics.filter(({ type }) => type === "TECHNOLOGY");
    setSelectedTopic(topic[0].topics);
  }, []);

  const handleSelected = (value) => {
    // setSelected(value);
  };

  const Close = () => (
    <View style={styles.closeContainer}>
      <HeaderTouchable
        style={styles.closeTouchable}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name={"ios-close"} size={scaleSize(20)} color={WHITE} />
      </HeaderTouchable>
    </View>
  );

  return (
    <RootSafeArea style={styles.rootSafe}>
      <Container style={styles.container}>
        <Close />
        {/* <RootScrollView stickyHeaderIndices={[0]}> */}
        <Text style={styles.selectedCategoryText}>TECHNOLOGY</Text>
        <Title title={"Change  Topics"} type="sub-title" />
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginVertical: scaleSize(25),
            justifyContent: "flex-end",
          }}
        >
          {selectedTopic.map(({ val, selected }) => {
            return (
              <View
                key={val}
                style={{
                  marginVertical: scaleSize(10),
                  marginHorizontal: scaleSize(10),
                }}
              >
                <Tag
                  topic={val}
                  onPress={() => handleSelected(val)}
                  value={selected}
                  styleTabContainer={{
                    backgroundColor: selected ? PLACEHOLDER : GRAY_MEDIUM,
                  }}
                  styleTabText={{
                    color: selected ? GRAY_MEDIUM : PLACEHOLDER,
                  }}
                />
              </View>
            );
          })}
        </View>
        {/* </RootScrollView> */}
      </Container>
    </RootSafeArea>
  );
};

const styles = StyleSheet.create({
  rootSafe: { marginTop: scaleSize(140), backgroundColor: "transparent" },
  container: {
    borderTopLeftRadius: scaleSize(30),
    borderTopRightRadius: scaleSize(30),
  },
  closeContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: scaleSize(12),
    marginRight: scaleSize(10),
  },
  closeTouchable: {
    borderRadius: scaleSize(20),
    height: scaleSize(40),
    width: scaleSize(40),
  },
  selectedCategoryText: {
    color: "#fff",
    fontSize: scaleFont(12),
    marginBottom: scaleSize(2),
    letterSpacing: scaleFont(2),
    fontFamily: FONT_FAMILY_REGULAR,
  },
});

export default ChangeTopic;
