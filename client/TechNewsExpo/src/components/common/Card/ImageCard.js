import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground, Pressable, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  TextContainer,
  ImageText,
  TextContainerBottom,
  ImageTextBottom,
} from "_styles/ImageCard";
import { scaleSize, WINDOW_WIDTH } from "_styles/mixins";
import { BACKGROUND_COLOR_SEC } from "_styles/colors";

const ImageCard = ({ data, type }) => {
  const navigation = useNavigation();

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
        onPress={() => {
          navigation.navigate("Detail", { data: data });
        }}
      >
        <ImageBackground
          source={{
            uri: urlToImage
              ? urlToImage
              : "https://i.pinimg.com/originals/f3/d9/a8/f3d9a8e5fd6f55a898db48a6888fb0e8.png",
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
          blurRadius={urlToImage ? 0 : 50}
        >
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.9)"]}
            style={{
              borderRadius: type === "headline" ? scaleSize(7) : scaleSize(5),
              position: "absolute",
              height: `100%`,
              width: `100%`,
            }}
          />
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
