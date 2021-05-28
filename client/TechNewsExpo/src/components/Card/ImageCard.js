import React from "react";
import { ImageBackground, Pressable, View } from "react-native";
import {
  TextContainer,
  ImageText,
  TextContainerBottom,
  ImageTextBottom,
} from "_styles/ImageCard";
import { scaleSize, WINDOW_WIDTH } from "_styles/mixins";

const ImageCard = ({ data, type }) => {
  const { urlToImage, title } = data;

  const CategoryTypeWidth =
    type === "category" ? scaleSize(170) : WINDOW_WIDTH - 50;
  const CategoryTypeHeight =
    type === "category" ? scaleSize(170) : scaleSize(120);

  return (
    <View
      style={{
        width: type === "headline" ? scaleSize(250) : CategoryTypeWidth,
      }}
    >
      <Pressable
        style={{
          height: type === "headline" ? scaleSize(250) : CategoryTypeHeight,
          width: type === "headline" ? scaleSize(250) : CategoryTypeWidth,
        }}
        // onPress={() => console.log("test.....")}
      >
        <ImageBackground
          source={{
            uri: urlToImage,
          }}
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
          }}
          imageStyle={{
            borderRadius: type === "headline" ? scaleSize(7) : scaleSize(5),
            opacity: 0.7,
          }}
          resizeMode="cover"
        >
          {type === "headline" ? (
            <TextContainer type="headline">
              <ImageText type="headline">{title}</ImageText>
            </TextContainer>
          ) : (
            <View />
          )}

          {type === "category2" ? (
            <TextContainer>
              <ImageText>{title}</ImageText>
            </TextContainer>
          ) : (
            <View />
          )}
        </ImageBackground>
      </Pressable>

      {type === "category" ? (
        <TextContainerBottom>
          <ImageTextBottom>{title}</ImageTextBottom>
        </TextContainerBottom>
      ) : (
        <View />
      )}
    </View>
  );
};

export default ImageCard;
