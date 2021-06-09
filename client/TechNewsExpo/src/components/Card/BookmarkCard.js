import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, Card, Text, ImageContainer } from "_styles/BookmarkCard";

const BookmarkCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <Card
      onPress={() => {
        navigation.navigate("Detail", { data: data });
      }}
    >
      {data.urlToImage ? (
        <Image
          source={{
            uri: data.urlToImage,
          }}
        />
      ) : (
        <ImageContainer />
      )}
      <Text>{data.title}</Text>
    </Card>
  );
};

export default BookmarkCard;
