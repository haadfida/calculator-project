import React from "react";
import { StyleSheet, Image, Pressable } from "react-native";

import Colors from "../constants/colors";
import Imports from "../constants/imports";

const ArithmeticIcon = (props) => {
  const { setTimesPressed, handleOnPressArithmeticIcon, iconType } = props;

  const filePathHandler = (props) => {
    if (iconType == "add") {
      return (
        <Image style={styles.icon} source={Imports.addIcon} />
      );
    } else {
      return (
        <Image style={styles.icon} source={Imports.minusIcon} />
      );
    }
  };
  return (
    <Pressable
      onPress={handleOnPressArithmeticIcon}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? Colors.pressed : Colors.white,
        },
        styles.wrapperCustom,
      ]}
    >
      {filePathHandler}
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
