import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import "react-native-gesture-handler";
import Top from "./Top";
import Middle from "./Middle";
import Bottom from "./Bottom";
import PaperSizes from "..//constants/paperSize";
import Colors from "..//constants/CORE_COLORS";


function HomeScreen() {
  const [length, setLength] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [grammage, setGrammage] = useState<number>(0);
  const [currentSheetsCount, setCurrentSheetsCount] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [isCustom, setIsCustom] = useState<boolean>(false);

  const [selectedPaperType, setSelectedPaperTyped] = useState<string>("CUSTOM");
  const [selectedPaperSize, setSelectedPaperSize] = useState<string>("");

  useEffect(() => {
    handleWeight();
  });

  const handleOnSelectedPaperType = (button: { name: string }) => {
    setSelectedPaperTyped(button.name);
    setSelectedPaperSize("");
    setIsCustom(false);
  };

  const handleWeight = () => {
    setWeight(
      Math.floor(
        Number(length * width * 0.01 * 0.01 * grammage * currentSheetsCount)
      )
    );
  };
  interface PaperSize {
    key: number;
    values: string[];
  }
  const papersizelist = PaperSizes[selectedPaperType.replace(/\s/g, "")];
  // console.log(papersizelist);
  const handleOnSelectionPaperSize = (title: string) => {
    setSelectedPaperSize(title);
    setIsCustom(false);
    if (String([selectedPaperSize]) in papersizelist) {
      setLength(papersizelist[selectedPaperSize]["length"]);
      setWidth(papersizelist[selectedPaperSize]["width"]);
      setGrammage(papersizelist[selectedPaperSize]["gram"]);
      setWeight(length * width * 0.01 * 0.01 * grammage * currentSheetsCount);
    }
  };

  const handleOnLengthChanged = (val: number) => {
    setLength(val);
    setIsCustom(true);
    setSelectedPaperTyped("CUSTOM");
  };

  const handleOnWidthChanged = (val: number) => {
    setWidth(val);
    setIsCustom(true);
    setSelectedPaperTyped("CUSTOM");
  };

  const handleOnGrammmageChanged = (val: number) => {
    setGrammage(val);
    setIsCustom(true);
    setSelectedPaperTyped("CUSTOM");
  };

  return (
    <View style={styles.screen}>
      <Top
        currentSheetsCount={currentSheetsCount}
        onSheetCountUpdated={setCurrentSheetsCount}
        handleWeight={handleWeight}
        weight={weight}
      />
      <Middle
        selectedPaperType={selectedPaperType}
        selectedPaperSize={selectedPaperSize}
        handleOnSelectedPaperType={handleOnSelectedPaperType}
        handleOnSelectionPaperSize={handleOnSelectionPaperSize}
        isCustom={isCustom}
      />
      <Bottom
        onSliderPressLength={handleOnLengthChanged}
        onSliderPressWidth={handleOnWidthChanged}
        onSliderPressGrammage={handleOnGrammmageChanged}
        length={length}
        width={width}
        grammage={grammage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: Colors.white,
  },
});

export default HomeScreen;
