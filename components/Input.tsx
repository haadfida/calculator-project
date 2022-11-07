import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";

const Input = (props: any ) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    marginVertical: 10,
    fontFamily: 'Montserrat_400Regular'
  },
});

export default Input;
