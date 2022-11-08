import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";
import CORE_THEME from "../constants/CORE_THEME";

const Input = (props: any ) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: CORE_THEME.InputHeight,
    marginVertical: CORE_THEME.margin,
    fontFamily: 'Montserrat_400Regular'
  },
});

export default Input;
