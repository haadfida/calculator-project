import React from "react";
import { Text, StyleSheet, Image } from "react-native";

import CORE_COLORS from "../constants/CORE_COLORS";
import CORE_THEME from "../constants/CORE_THEME";
import Card from "./Card";
import Counter from "./Counter";
import Imports from "../constants/imports";
import { useSelector, useDispatch } from 'react-redux';

const Top = (props: {
  onSheetCountUpdated: any;
  weight: any;
}) => {
  const { weight } = props;
  const dispatch = useDispatch();
  const currentSheetsCount = useSelector(state => state.count.count);
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

 
  return (
    <>
      <Card style={styles.TopContainer}>
        {renderPaperContent()}
        <Counter></Counter>
      </Card>
      <Card style={styles.cardContainer}>
        <Text style={{ ...styles.textSizePrimary, ...styles.textColor }}>
          {weight}g
        </Text>
        <Text style={{ ...styles.textSizeSecondary, ...styles.textColor }}>
          Per copy
        </Text>
      </Card>
    </>
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
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: CORE_THEME.TopCardContainerPaddingVertical,
    justifyContent: "space-between",
    width: CORE_THEME.TopCardContainerWidth,
    height: CORE_THEME.TopCardContainerHeight,
    borderBottomLeftRadius: CORE_THEME.TopContainerMarginTopBorderTopLeftRadius,
    borderBottomRightRadius:
      CORE_THEME.TopContainerMarginTopBorderTopRightRadius,
    backgroundColor: CORE_COLORS.cardTopContainer,
  },
  textSizePrimary: {
    fontSize: CORE_THEME.TopTextSizePrimary,
    fontWeight: "bold",
    fontFamily: "Montserrat_400Regular",
  },
  textSizeSecondary: {
    fontSize: CORE_THEME.TopTextSizeSeconary,
    fontFamily: "Montserrat_400Regular",
    fontWeight: "bold",
  },
  textColor: {
    color: "white",
  },
});

export default Top;
