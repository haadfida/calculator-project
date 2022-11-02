import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  const { style, children } = props;
  return (
    <View style={{ ...styles.card, ...style }}>{children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: "white",
    padding: 20,
  },
});

export default Card;
