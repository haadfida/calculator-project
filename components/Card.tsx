import React from "react";
import { View, StyleSheet } from "react-native";
import CORE_COLORS from "../constants/CORE_COLORS";
import CORE_THEME from "../constants/CORE_THEME";

const Card = (props: { style: any; children: any }) => {
  const { style, children } = props;
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: CORE_COLORS.white,
    padding: CORE_THEME.CardPadding,
  },
});

export default Card;
