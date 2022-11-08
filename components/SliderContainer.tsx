import React, { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import Slider from "@react-native-community/slider";

import CORE_COLORS from "../constants/CORE_COLORS";
import CORE_THEME from "../constants/CORE_THEME";


const SliderContainer = (props: { text: string; value: number; unit: string; maxValue: string; onSliderPress: any; }) => {
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
        maximumValue={Number(maxValue)}
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
    margin: CORE_THEME.margin,
  },
  textColor: {
    color: CORE_COLORS.white,
    fontFamily: "Montserrat_400Regular",
    fontWeight: "bold",
  },
  border: {
    alignItems: "center",
    borderRadius: CORE_THEME.SliderContainerBorderRadius,
    padding: CORE_THEME.padding,
    backgroundColor: CORE_COLORS.bottomSliderText,
  },
  cardContainer: {
    margin: CORE_THEME.margin,
    width: CORE_THEME.SliderContainerWidth,
    borderRadius: CORE_THEME.borderRadius,
  },
  slider: {
    width: "100%",
    height: CORE_THEME.SliderContainerSliderHeight,
    backgroundColor: CORE_COLORS.sliderBackgroundColor,
  },
});

export default SliderContainer;
