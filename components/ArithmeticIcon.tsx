import React from "react";
import { StyleSheet, Image, Pressable } from "react-native";

import CORE_COLORS from "../constants/CORE_COLORS";
import Imports from "../constants/imports";

const ArithmeticIcon = (props: {
  handleOnPressArithmeticIcon: any;
  iconType: string;
  style: object;
}) => {
  const { handleOnPressArithmeticIcon, iconType, style } = props;

  const filePathHandler = () => {
    if (iconType == "add") {
      return <Image source={Imports.addIcon} />;
    } else {
      return <Image source={Imports.minusIcon} />;
    }
  };
  return (
    <Pressable
      onPress={handleOnPressArithmeticIcon}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? CORE_COLORS.pressed : CORE_COLORS.white,
        },
        { ...styles.wrapperCustom, ...style},
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
