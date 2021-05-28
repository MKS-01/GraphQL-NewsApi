import React from "react";
import { TitleText } from "_styles/Header";

const Title = ({ title, type }) => <TitleText type={type}>{title}</TitleText>;

export default Title;
