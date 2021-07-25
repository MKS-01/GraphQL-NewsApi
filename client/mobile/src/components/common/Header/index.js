import React from "react";
import { TitleText } from "_styles/Header";

const Title = ({ title, type, paddingLeft, settingHeader }) => (
  <TitleText
    type={type}
    paddingLeft={paddingLeft}
    settingHeader={settingHeader}
  >
    {title}
  </TitleText>
);

export default Title;
