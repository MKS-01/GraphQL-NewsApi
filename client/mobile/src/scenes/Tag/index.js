import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Loader from "_components/common/Loader";
import Error from "_components/common/Error";
import Title from "_components/common/Header";
import TagList from "_components/Tag/TagList";
import NetworkConnection from "_utils/NetworkConnection";
import { Container, RootSafeArea } from "_styles/RootView";
import { scaleSize } from "_styles/mixins";
import { WHITE } from "_styles/colors";
import { useQuery, gql } from "@apollo/client";
import NoData from "_components/common/NoData";

const TOP_HEADLINES = gql`
  query topHeadlines($input: NewsAPIInput) {
    topHeadlines(input: $input) {
      id
      author
      title
      description
      url
      urlToImage
      publishedAt
      content
    }
  }
`;

const TagScreen = ({ route }) => {
  const [category, setCategory] = useState("TECHNOLOGY");
  const [search, setSearch] = useState("");
  const navigation = useNavigation();
  const { topic } = route.params;

  const { loading, error, data, refetch } = useQuery(TOP_HEADLINES, {
    fetchPolicy: "no-cache",
    variables: {
      input: {
        language: "EN",
        category: category,
        query: topic,
      },
    },
  });

  const Header = () => (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity
        style={{
          marginRight: scaleSize(10),
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
  );

  let network = NetworkConnection();

  if (network === false) {
    return (
      <RootSafeArea>
        <Container>
          <Header />
          <Error network={true} />
        </Container>
      </RootSafeArea>
    );
  }

  if (loading)
    return (
      <RootSafeArea>
        <Container>
          <Header />
          <Loader />
        </Container>
      </RootSafeArea>
    );

  if (error)
    return (
      <RootSafeArea>
        <Container>
          <Header />
          <Error error={error} />
        </Container>
      </RootSafeArea>
    );

  return (
    <RootSafeArea>
      <Container>
        <Header />
        {!Array.isArray(data.topHeadlines) || data.topHeadlines.length === 0 ? (
          <NoData />
        ) : (
          <TagList data={data.topHeadlines} />
        )}
      </Container>
    </RootSafeArea>
  );
};

export default TagScreen;
