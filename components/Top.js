import React, { useState, createContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Values } from "./Middle";

import Colors from "../constants/colors";
import Card from "./Card";
import Counter from "./Counter";
import Imports from "../constants/imports";

const Top = (props) => {
  const { currentCount, setCurrentCount, weight } = props;
  const renderPaperContent = (props) => {
    if (currentCount <= 1 || currentCount < 5) {
      sourcePaperContent = Imports.lessThanFive;
    } else if (currentCount >= 5 && currentCount < 10) {
      sourcePaperContent = Imports.greaterthanFour;
    } else if (currentCount >= 10 && currentCount < 25) {
      sourcePaperContent = Imports.greaterthanNine;
    } else if (currentCount >= 25 && currentCount < 50) {
      sourcePaperContent = Imports.greaterthanTwentyFour;
    } else if (currentCount >= 50) {
      sourcePaperContent = Imports.greaterthanFortyNine;
    }
    return <Image source={sourcePaperContent} />;
  };

  const configureCounter = (timesPressed) => {
    let textLog = 0;
    if (timesPressed > 0) {
      textLog = timesPressed;
    } else {
      textLog = 0;
    }
    setCurrentCount(timesPressed);

    return textLog;
  };
  return (
    <View style={styles.screen}>
      <Card style={styles.TopContainer}>
        {renderPaperContent()}
        <Counter configureCounter={configureCounter}></Counter>
      </Card>
      <Card style={styles.cardContainer}>
        <Text style={{ ...styles.textSizePrimary, ...styles.textColor }}>
          {weight}g
        </Text>
        <Text style={{ ...styles.textSizeSecondary, ...styles.textColor }}>
          Per copy
        </Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  TopContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    width: 400,
    height: 150,
    backgroundColor: Colors.topBackgroundColor,
    maxHeight: "80%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContainer: {
    margintop: -16,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    justifyContent: "space-between",
    width: 400,
    height: 60,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: Colors.cardTopContainer,
  },
  textSizePrimary: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Montserrat_400Regular",
  },
  textSizeSecondary: {
    fontSize: 12,
    fontFamily: "Montserrat_400Regular",
    fontWeight: "bold",
  },
  textColor: {
    color: "white",
  },
});

export default Top;
export { Values };
