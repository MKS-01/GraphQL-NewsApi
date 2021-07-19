import React from "react";
import { Share } from "react-native";

//docs:https://reactnative.dev/docs/share

const ShareApi = async (msg) => {
  try {
    const result = await Share.share({
      url: msg,
      title: msg,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};

export default ShareApi;
