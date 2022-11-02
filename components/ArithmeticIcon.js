import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button, Pressable } from "react-native";

// import Colors from "../constants/colors";
import Card from "./Card";
import Counter from "./Counter";

const ArithmeticIcon = (props) => {
  const { setTimesPressed, arithmeticCounter, filePath } = props;
  return (
    <Pressable
      onPress={arithmeticCounter}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
        },
        styles.wrapperCustom,
      ]}
    >
      {({ pressed }) => (
        <Image style={styles.icon} source={require("../assets/add-icon.png")} />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressStyle: {},

  wrapperCustom: {
    borderRadius: 20,
    padding: 6,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
});

export default ArithmeticIcon;
