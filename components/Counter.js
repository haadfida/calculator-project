import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ArithmeticIcon from "./ArithmeticIcon";
import CORE_COLORS from "../constants/CORE_COLORS";
import Input from "./Input";

const Counter = (props) => {
  const [timesPressed, setTimesPressed] = useState(0);

  const handleOnPressMinus = (current) => {
    if (timesPressed > 0) {
      setTimesPressed((current) => current - 1);
    }
  };

  const handleOnEnterText = (value) => {
    let setValue = parseInt(value);
    if (setValue > 0) {
      setTimesPressed(setValue);
    }
  };

  const handleOnPressAdd = (current) => {
    setTimesPressed((current) => current + 1);
  };

  return (
    <View style={styles.container}>
      <ArithmeticIcon
        setTimesPressed={setTimesPressed}
        handleOnPressArithmeticIcon={handleOnPressAdd}
        iconType="add"
      />
      <View style={styles.sheetBox}>
        <Input onChangeText={handleOnEnterText} style={{ ...styles.text, ...styles.textColor }}>
          {props.configureCounter(timesPressed)}
        </Input>
        <Text style={{ ...styles.textSecondary, ...styles.textColor }}>
          Sheets
        </Text>
      </View>
      <ArithmeticIcon
        setTimesPressed={setTimesPressed}
        handleOnPressArithmeticIcon={handleOnPressMinus}
        iconType="minus"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 90,
  },
  text: {
    fontSize: 25,
    keyboardType: "number-pad",
    autoCapitalize: "none",
    maxLength: 2,
    paddingLeft: 4,
    fontWeight: "bold",
  },
  textColor: {
    color: "white",
    fontFamily: "Montserrat_400Regular",
    fontWeight: "bold",
  },
  textSecondary: {
    fontSize: 10,
    paddingBottom: 8,
  },
  sheetBox: {
    padding: 15,
    height: "60%",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: CORE_COLORS.cardBorderColor,
    backgroundColor: CORE_COLORS.cardBackgroundColor,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 15,
    marginTop: -16,
    marginBottom: -15,
  },
});

export default Counter;
