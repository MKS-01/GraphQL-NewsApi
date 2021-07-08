import React from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Card,
  Title,
  TitleView,
  ImageContainer,
  ImageCard,
  DateText,
  DateTextContainer,
} from "_styles/SearchCard";
import { scaleSize } from "_styles/mixins";
import { FormateDateTime } from "_utils/DateTime";

const SearchCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <Card
      onPress={() => {
        navigation.navigate("Detail", { data: data });
      }}
    >
      {data.urlToImage ? (
        <ImageContainer>
          <LinearGradient
            colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.5)"]}
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              zIndex: 1,
              position: "absolute",
              borderRadius: scaleSize(2),
            }}
          />
          <ImageCard
            source={{
              uri: data.urlToImage,
            }}
          />
        </ImageContainer>
      ) : (
        <ImageContainer type="empty" />
      )}

      <TitleView>
        <Title numberOfLines={3} ellipsizeMode={"clip"}>
          {data.title}
        </Title>

        <DateTextContainer>
          <DateText>
            {FormateDateTime(data.publishedAt, "yyyy-mm-dd hh-mm-ss")}
          </DateText>
        </DateTextContainer>
      </TitleView>
    </Card>
  );
};

export default SearchCard;
