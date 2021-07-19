import React from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  Card,
  Text,
  ImageContainer,
  DateText,
  DateTextContainer,
} from "_styles/BookmarkCard";
import { scaleSize } from "_styles/mixins";
import { FormateDateTime } from "_utils/DateTime";
import moment from "moment";

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
            colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.8)"]}
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
        </>
      ) : (
        <ImageContainer />
      )}
      <Text numberOfLines={3} ellipsizeMode={"clip"}>
        {data.title}
      </Text>
      <DateTextContainer>
        <DateText>{moment().to(data.publishedAt)}</DateText>
      </DateTextContainer>
    </Card>
  );
};

export default BookmarkCard;
