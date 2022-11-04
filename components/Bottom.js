import React, { useState, useContext } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Slider from "@react-native-community/slider";
import Card from "./Card";
import SliderContainer from "./SliderContainer";

import Colors from "../constants/colors";

const Bottom = (props) => {
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [gram, setGram] = useState(0);
  
  const handleOnChangeLength = (val) => {
    setLength(val);
  };

  const handleOnChangeWidth = (val) => {
    setWidth(val);
  };

  const handleOnChangeGram = (val) => {
    setGram(val);
  };

  return (
    <Card style={styles.cardContainer}>
      <SliderContainer
        handleOnChangeLength={handleOnChangeLength}
        value={length}
        text="Length"
        unit="mm"
        maxValue= "350"
      />
      <SliderContainer
        handleOnChangeLength={handleOnChangeWidth}
        value={width}
        text="Width"
        unit="mm"
        maxValue= "350"
      />
      <SliderContainer
        handleOnChangeLength={handleOnChangeGram}
        value={gram}
        text="Grammage"
        unit="g"
        maxValue= "1000"
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
