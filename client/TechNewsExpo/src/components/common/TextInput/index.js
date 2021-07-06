import React from "react";
import { TextInput, TextInputHeader } from "_styles/TextField";

const TextField = ({
  title,
  value,
  onChangeText,
  placeholderText,
  keyboardType,
  secureTextEntry,
}) => {
  return (
    <>
      <TextInputHeader>{title}</TextInputHeader>
      <TextInput
        keyboardAppearance={"dark"}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholderText}
        keyboardType={keyboardType ? keyboardType : "default"}
        secureTextEntry={secureTextEntry}
      />
    </>
  );
};

export default TextField;
