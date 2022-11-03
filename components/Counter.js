import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ArithmeticIcon from "./ArithmeticIcon";
import Colors from "../constants/colors";
import Input from "./Input";

const Counter = (props) => {
  const [timesPressed, setTimesPressed] = useState(0);

  const handleOnPressMinus = (current) => {
    if (timesPressed > 0) {
      setTimesPressed((current) => current - 1);
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
        <Input style={{ ...styles.text, ...styles.textColor }}>
          {props.configureCounter(timesPressed)}
        </Input>
        <Text style={styles.textColor}>Sheets</Text>
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
  },
  wrapperCustom: {
    borderRadius: 20,
    padding: 6,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  text: {
    fontSize: 30,
    keyboardType: "number-pad",
    autoCapitalize: "none",
    maxLength: 2,
  },
  textColor: {
    color: "white",
    fontFamily: "Montserrat_400Regular",
  },
  sheetBox: {
    padding: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.cardBorderColor,
    backgroundColor: Colors.cardBackgroundColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: -16,
    marginBottom: -16,
  },
});

export default Counter;
