import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    marginVertical: 10,
    fontFamily: 'Montserrat_400Regular',
    keyboardType: "number-pad",
    maxLength: 2,

  },
});

export default Input;
