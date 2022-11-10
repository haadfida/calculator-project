import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ArithmeticIcon from "./ArithmeticIcon";
import CORE_COLORS from "../constants/CORE_COLORS";
import CORE_THEME from "../constants/CORE_THEME";
import Input from "./Input";

interface Props{
  configureCounter: (arg0: number) => any;
}

const Counter: React.FC<Props>  = (props: Props) => {
  const [timesPressed, setTimesPressed] = useState(0);

  const handleOnPressMinus = () => {
    if (timesPressed > 0) {
      setTimesPressed((current) => current - 1);
    }
  };

  const handleOnPressAdd = () => {
    setTimesPressed((current) => current + 1);
  };

  const handleOnEnterText = (value: string) => {
    let setValue = parseInt(value);
    if (setValue > 0) {
      setTimesPressed(setValue);
    }
  };

  return (
    <View style={styles.container}>
      <ArithmeticIcon
        handleOnPressArithmeticIcon={handleOnPressAdd}
        iconType="add"
        style={styles.plus}

      />
      <View style={styles.sheetBox}>
        <Input
          onChangeText={handleOnEnterText}
          style={{ ...styles.text, ...styles.textColor }}
        >
          {props.configureCounter(timesPressed)}
        </Input>
        <Text style={{ ...styles.textSecondary, ...styles.textColor }}>
          Sheets
        </Text>
      </View>
      <ArithmeticIcon
        handleOnPressArithmeticIcon={handleOnPressMinus}
        iconType="minus"
        style={styles.minus}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: CORE_THEME.CounterContainerWidth,
  },
  text: {
    fontSize: CORE_THEME.CounterFontSize,
    keyboardType: "number-pad",
    autoCapitalize: "none",
    maxLength: CORE_THEME.CounterMaxLength,
    paddingLeft: CORE_THEME.CounterPaddingLeft,
    fontWeight: "bold",
  },
  textColor: {
    color: "white",
    fontFamily: "Montserrat_400Regular",
    fontWeight: "bold",
  },
  textSecondary: {
    fontSize: CORE_THEME.CounterFontSizeSecondary,
    paddingBottom: CORE_THEME.CounterTextPaddingBottom,
  },
  sheetBox: {
    padding: CORE_THEME.CounterSheetBoxPadding,
    height: "60%",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: CORE_COLORS.cardBorderColor,
    backgroundColor: CORE_COLORS.cardBackgroundColor,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: CORE_THEME.CounterSheetBorderRadius,
    // marginTop: CORE_THEME.marginTop,
    // marginBottom: CORE_THEME.CounterSheetMarginBottom,
  },
  minus:{
    position: "absolute",
    left: 30,
    top: 55,
  },
  plus:{
    position: "absolute",
    left: 30,
    top: -20,
  }

});

export default Counter;
