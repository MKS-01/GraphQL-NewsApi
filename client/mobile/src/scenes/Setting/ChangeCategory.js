import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Error from "_components/common/Error";
import NetworkConnection from "_utils/NetworkConnection";
import { Container, RootSafeArea, RootScrollView } from "_styles/RootView";
import { scaleSize } from "_styles/mixins";
import { WHITE } from "_styles/colors";
import { HeaderTouchable } from "_styles/Detail";
import { GRAY_MEDIUM, PLACEHOLDER } from "_styles/colors";
import Title from "_components/common/Header";
import Tag from "_components/common/Tag";

const CategoryEnum = [
  "TECHNOLOGY",
  "BUSINESS",
  "SPORTS",
  "GENERAL",
  "HEALTH",
  "SCIENCE",
];

const ChangeCategory = () => {
  const [selected, setSelected] = useState("TECHNOLOGY");
  const navigation = useNavigation();

  const handleSelected = (value) => {
    setSelected(value);
  };

  let network = NetworkConnection();

  if (network === false) {
    return <Error network={true} />;
  }

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
        <Title title={"Change Category"} type="sub-title" />

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginVertical: scaleSize(25),
            justifyContent: "flex-end",
          }}
        >
          {CategoryEnum.map((val) => {
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
                    backgroundColor:
                      selected === val ? PLACEHOLDER : GRAY_MEDIUM,
                  }}
                  styleTabText={{
                    color: selected === val ? GRAY_MEDIUM : PLACEHOLDER,
                  }}
                />
              </View>
            );
          })}
        </View>
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
});

export default ChangeCategory;
