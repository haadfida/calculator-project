import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const Card = (props) => {
  const { style, children } = props;
  return (
    <View style={{ ...styles.card, ...style }}>{children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    padding: 20,
  },
});

export default Card;
