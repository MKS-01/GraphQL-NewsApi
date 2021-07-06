import React from "react";
import { ImageBackground, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import ShareApi from "_utils/ShareApi";
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

const HeaderButton = ({ iconName, type, onPress }) => {
  const navigation = useNavigation();

  return (
    <HeaderTouchable
      onPress={() => (type === "back" ? navigation.goBack() : onPress())}
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
          <HeaderButton
            iconName={"ios-bookmark"}
            type={"bookmark"}
            onPress={() => console.log("tets")}
          />
        </HeaderContainer>
      </ImageBackground>
      <BodyContainer>
        <DescriptionText type={"desc"}>{description} </DescriptionText>
        <DescriptionText type={"content"}>{content} </DescriptionText>
        <ReadMoreTouchable
          onPress={() =>
            // Linking.openURL(url)
            WebBrowser.openBrowserAsync(url)
          }
        >
          <ReadMoreText>Read More</ReadMoreText>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <HeaderButton
              iconName={"ios-share-social-sharp"}
              type={"share"}
              onPress={() => {
                ShareApi(url);
              }}
            />
          </View>
        </ReadMoreTouchable>
      </BodyContainer>
    </RootContainer>
  );
};

export default Details;
