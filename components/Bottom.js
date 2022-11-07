import React, { useState, useContext } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Slider from "@react-native-community/slider";
import Card from "./Card";
import SliderContainer from "./SliderContainer";

import Colors from "../constants/colors";

const Bottom = (props) => {
  const {handleOnChangeLength, handleOnChangeWidth, handleOnChangeGram, length, width, gram} = props
  return (
    <Card style={styles.cardContainer}>
      <SliderContainer
        handleOnChangeLength={handleOnChangeLength}
        value={length}
        text="Length"
        unit="mm"
        maxValue= "515"
      />
      <SliderContainer
        handleOnChangeLength={handleOnChangeWidth}
        value={width}
        text="Width"
        unit="mm"
        maxValue= "728"
      />
      <SliderContainer
        handleOnChangeLength={handleOnChangeGram}
        value={gram}
        text="Grammage"
        unit="g"
        maxValue= "30"
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  headers: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textColor: {
    color: Colors.white,
    fontFamily: "Montserrat_400Regular",
    fontWeight: "bold",
  },
  cardContainer: {
    margin: 10,
    width: 400,
    borderRadius: 10,
    backgroundColor: Colors.bottomCardContainer,
  },
  slider: {
    width: "100%",
    height: 40,
    backgroundColor: Colors.sliderBackgroundColor,
  },
});

export default Bottom;
