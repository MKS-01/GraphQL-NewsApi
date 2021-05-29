import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, Card, Text } from "_styles/BookmarkCard";

const BookmarkCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <Card
      onPress={() => {
        navigation.navigate("Detail", { data: data });
      }}
    >
      <Image
        source={{
          uri: data.urlToImage,
        }}
      />
      <Text>{data.title}</Text>
    </Card>
  );
};

export default BookmarkCard;
