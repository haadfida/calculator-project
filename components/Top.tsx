import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import CORE_COLORS from "../constants/CORE_COLORS";
import CORE_THEME from "../constants/CORE_THEME";
import Card from "./Card";
import Counter from "./Counter";
import Imports from "../constants/imports";

const Top = (props: { currentSheetsCount: any; onSheetCountUpdated: any; weight: any; }) => {
  const { currentSheetsCount, onSheetCountUpdated, weight } = props;
  const renderPaperContent = () => {
    let sourcePaperContent = null;
    if (currentSheetsCount <= 1 || currentSheetsCount < 5) {
      sourcePaperContent = Imports.lessThanFive;
    } else if (currentSheetsCount >= 5 && currentSheetsCount < 10) {
      sourcePaperContent = Imports.greaterthanFour;
    } else if (currentSheetsCount >= 10 && currentSheetsCount < 25) {
      sourcePaperContent = Imports.greaterthanNine;
    } else if (currentSheetsCount >= 25 && currentSheetsCount < 50) {
      sourcePaperContent = Imports.greaterthanTwentyFour;
    } else if (currentSheetsCount >= 50) {
      sourcePaperContent = Imports.greaterthanFortyNine;
    }
    return <Image source={sourcePaperContent} />;
  };

  const configureCounter = (timesPressed: number) => {
    let textLog = 0;
    if (timesPressed > 0) {
      textLog = timesPressed;
    } else {
      textLog = 0;
    }
    onSheetCountUpdated(timesPressed);

    return textLog;
  };
  return (
    <View>
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
    marginTop: CORE_THEME.TopContainerMarginTop,
    width: CORE_THEME.TopContainerMarginTopWidth,
    height: CORE_THEME.TopContainerMarginTopHeight,
    backgroundColor: CORE_COLORS.topBackgroundColor,
    maxHeight: CORE_THEME.TopContainerMarginTopMaxHeight,
    borderTopLeftRadius: CORE_THEME.TopContainerMarginTopBorderTopLeftRadius,
    borderTopRightRadius: CORE_THEME.TopContainerMarginTopBorderTopRightRadius,
  },
  cardContainer: {
    margintop: -16,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    justifyContent: "space-between",
    width: 400,
    height: 60,
    borderBottomLeftRadius: 10, //replace
    borderBottomRightRadius: 10, //replace
    backgroundColor: CORE_COLORS.cardTopContainer,
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
