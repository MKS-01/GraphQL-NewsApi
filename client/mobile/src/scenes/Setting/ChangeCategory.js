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
import Title from "_components/common/Header";

const ChangeCategory = () => {
  const navigation = useNavigation();

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
        <RootScrollView stickyHeaderIndices={[0]}>
          <Title title={"Change Category"} type="sub-title" />
        </RootScrollView>
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
