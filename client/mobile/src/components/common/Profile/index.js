import React from "react";
import { View } from "react-native";
import { ProfileContainer, ProfilePic, ProfileUsername } from "_styles/Profile";
import Title from "_components/common/Header";
import { scaleSize } from "_styles/mixins";

const Profile = ({ username }) => {
  return (
    <ProfileContainer>
      <ProfilePic source={require("_assets/images/profile.png")} />
      <ProfileUsername>{username}</ProfileUsername>
    </ProfileContainer>
  );
};

export default Profile;
