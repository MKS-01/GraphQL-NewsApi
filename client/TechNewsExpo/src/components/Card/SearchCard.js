import React from "react";
import {
  Card,
  Title,
  TitleView,
  ImageContainer,
  ImageCard,
} from "_styles/SearchCard";
import { useNavigation } from "@react-navigation/native";

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
        <Title>{data.title}</Title>
      </TitleView>
    </Card>
  );
};

export default SearchCard;
