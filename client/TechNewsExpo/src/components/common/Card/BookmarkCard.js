import React from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Card, Text, ImageContainer } from "_styles/BookmarkCard";
import { scaleSize } from "_styles/mixins";

const BookmarkCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <Card
      onPress={() => {
        navigation.navigate("Detail", { data: data });
      }}
    >
      {data.urlToImage ? (
        <>
          <LinearGradient
            colors={["rgba(0,0,0,0.2)", "rgba(0,0,0,0.6)"]}
            style={{
              height: scaleSize(165),
              width: "100%",
              display: "flex",
              zIndex: 1,
              position: "absolute",
              borderRadius: scaleSize(4),
            }}
          />
          <Image
            source={{
              uri: data.urlToImage,
            }}
          />
          {/* </LinearGradient> */}
        </>
      ) : (
        <ImageContainer />
      )}
      <Text>{data.title}</Text>
    </Card>
  );
};

export default BookmarkCard;
