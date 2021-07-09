import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Error from "_components/common/Error";
import Title from "_components/common/Header";
import TagList from "_components/Tag/TagList";
import NetworkConnection from "_utils/NetworkConnection";
import { Container, RootSafeArea } from "_styles/RootView";
import { scaleSize } from "_styles/mixins";
import { WHITE } from "_styles/colors";
import { playstations } from "../../json/mockData";

const TagScreen = ({ route }) => {
  const [search, setSearch] = useState("");
  const { topic } = route.params;
  const navigation = useNavigation();

  let network = NetworkConnection();

  if (network === false) {
    return <Error network={true} />;
  }

  //   TODO: api call based on topic

  return (
    <RootSafeArea>
      <Container>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={{
              marginRight: scaleSize(10),
              // backgroundColor: "red",
              padding: scaleSize(4),
            }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons
              name={"ios-chevron-back"}
              size={scaleSize(18)}
              color={WHITE}
            />
          </TouchableOpacity>
          <Title title={topic} type="title" />
        </View>

        <TagList data={playstations.articles} />
      </Container>
    </RootSafeArea>
  );
};

export default TagScreen;
