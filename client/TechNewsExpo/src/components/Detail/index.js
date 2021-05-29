import React from "react";
import { ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { scaleSize } from "_styles/mixins";
import { WHITE } from "_styles/colors";
import {
  RootContainer,
  BodyContainer,
  DescriptionText,
  ReadMoreTouchable,
  ReadMoreText,
  HeaderContainer,
  HeaderTouchable,
} from "_styles/Detail";

const HeaderButton = ({ iconName, type }) => {
  const navigation = useNavigation();
  return (
    <HeaderTouchable
      onPress={() => (type === "back" ? navigation.goBack() : "")}
    >
      <Ionicons name={iconName} size={scaleSize(25)} color={WHITE} />
    </HeaderTouchable>
  );
};

const Details = ({ data }) => {
  const { urlToImage, description, content, url } = data;

  return (
    <RootContainer>
      <ImageBackground
        source={{
          uri: urlToImage,
        }}
        style={{
          height: 360,
          width: "100%",
          display: "flex",
        }}
        imageStyle={{
          borderRadius: scaleSize(7),
          opacity: 0.7,
        }}
        resizeMode="cover"
      >
        <HeaderContainer>
          <HeaderButton iconName={"ios-arrow-back"} type={"back"} />
          <HeaderButton iconName={"ios-bookmark"} type={"bookmark"} />
        </HeaderContainer>
      </ImageBackground>
      <BodyContainer>
        <DescriptionText type={"desc"}>{description} </DescriptionText>
        <DescriptionText type={"content"}>{content} </DescriptionText>

        <ReadMoreTouchable
        //  onPress={() => this.openLink(url)}
        >
          <ReadMoreText>Read More</ReadMoreText>
        </ReadMoreTouchable>
      </BodyContainer>
    </RootContainer>
  );
};

export default Details;
