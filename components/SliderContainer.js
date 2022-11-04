import React, { useState, useContext } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Slider from "@react-native-community/slider";
import Card from "./Card";
import { Values } from "./Middle";


import Colors from "../constants/colors";

const SliderContainer = (props) => {
  const { text, value, unit, maxValue, handleOnChangeLength } = props;


  return (
    <View>
      <View style={styles.headers}>
        <Text style={styles.textColor}>{text}</Text>
        <View style={styles.border}>
        
          <Text style={styles.textColor}>{value} {unit}</Text>
        </View>
      </View>

      <Slider
        style={styles.slider}
        value={value}
        minimumValue={0}
        step={1}
        maximumValue={maxValue}
        minimumTrackTintColor="#69cbfa"
        maximumTrackTintColor="#69cbfa"
        thumbTintColor="#69cbfa"
        onValueChange={handleOnChangeLength}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headers: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  textColor: {
    color: Colors.white,
    fontFamily: "Montserrat_400Regular",
    fontWeight: "bold",
  },
  border: {
    alignItems: "center",
    borderRadius: 15,
    padding: 10,
    backgroundColor: Colors.bottomSliderText,
  },
  cardContainer: {
    margin: 10,
    width: 400,
    borderRadius: 10,
    backgroundColor: Colors.SliderContainerCardContainer,
  },
  slider: {
    width: "100%",
    height: 40,
    backgroundColor: Colors.sliderBackgroundColor,
  },
});

export default SliderContainer;
