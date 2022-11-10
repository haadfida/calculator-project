import React from "react";
import { StyleSheet } from "react-native";
import Card from "./Card";
import SliderContainer from "./SliderContainer";

import CORE_COLORS from "../constants/CORE_COLORS";

const Bottom = (props: {
  onSliderPressLength: any;
  onSliderPressWidth: any;
  onSliderPressGrammage: any;
  length: any;
  width: any;
  grammage: any;
}) => {
  const {
    onSliderPressLength,
    onSliderPressWidth,
    onSliderPressGrammage,
    length,
    width,
    grammage,
  } = props;
  const sliderContainerProps = [
    {
      onSliderPress: { onSliderPressLength },
      value: { length },
      text: "Length",
      unit: "mm",
      maxValue: "515",
    },
    {
      onSliderPress: { onSliderPressWidth },
      value: { width },
      text: "Width",
      unit: "mm",
      maxValue: "728",
    },
    {
      onSliderPress: { onSliderPressGrammage },
      value: { grammage },
      text: "Grammage",
      unit: "g",
      maxValue: "30",
    },
  ];
  return (
    <Card style={styles.cardContainer}>
      <SliderContainer
        onSliderPress={onSliderPressLength}
        value={length}
        text="Length"
        unit="mm"
        maxValue={515}
      />
      <SliderContainer
        onSliderPress={onSliderPressWidth}
        value={width}
        text="Width"
        unit="mm"
        maxValue={728}
      />
      <SliderContainer
        onSliderPress={onSliderPressGrammage}
        value={grammage}
        text="Grammage"
        unit="g"
        maxValue={30}
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
    color: CORE_COLORS.white,
    fontFamily: "Montserrat_400Regular",
    fontWeight: "bold",
  },
  cardContainer: {
    margin: 10,
    width: 400,
    borderRadius: 10,
    backgroundColor: CORE_COLORS.bottomCardContainer,
  },
  slider: {
    width: "100%",
    height: 40,
    backgroundColor: CORE_COLORS.sliderBackgroundColor,
  },
});

export default Bottom;
