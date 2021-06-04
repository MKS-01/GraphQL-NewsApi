import React from "react";
import { TitleText } from "_styles/Header";

const Title = ({ title, type, paddingLeft }) => (
  <TitleText type={type} paddingLeft={paddingLeft}>
    {title}
  </TitleText>
);

export default Title;
