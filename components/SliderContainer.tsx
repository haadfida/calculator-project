import React, { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import Slider from "@react-native-community/slider";

import CORE_COLORS from "../constants/CORE_COLORS";

const SliderContainer = (props: { text: any; value: any; unit: any; maxValue: any; onSliderPress: any; }) => {
  const { text, value, unit, maxValue, onSliderPress } = props;

  return (
    <Fragment>
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
        minimumTrackTintColor={CORE_COLORS.sliderTintColor}
        maximumTrackTintColor={CORE_COLORS.sliderTintColor}
        thumbTintColor={CORE_COLORS.sliderTintColor}
        onValueChange={onSliderPress}
      />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  headers: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  textColor: {
    color: CORE_COLORS.white,
    fontFamily: "Montserrat_400Regular",
    fontWeight: "bold",
  },
  border: {
    alignItems: "center",
    borderRadius: 15,
    padding: 10,
    backgroundColor: CORE_COLORS.bottomSliderText,
  },
  cardContainer: {
    margin: 10,
    width: 400,
    borderRadius: 10,
    // backgroundColor: CORE_COLORS.SliderContainerCardContainer,
  },
  slider: {
    width: "100%",
    height: 40,
    backgroundColor: CORE_COLORS.sliderBackgroundColor,
  },
});

export default SliderContainer;
