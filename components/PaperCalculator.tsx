import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import "react-native-gesture-handler";
import Top from "./Top";
import Middle from "./Middle";
import Bottom from "./Bottom";
import PaperSizes from "../constants/paperSize";
import Colors from "../constants/CORE_COLORS";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import {
  setLength,
  setWidth,
  setGrammage,
  setWeight,
  setIsCustom,
  setPaperType,
  setPaperSize
} from "../actions/PaperCalculationActions";

const PaperCalculator: React.FC = () => {
  const length = useSelector((state) => state.paper.length);
  const width = useSelector((state) => state.paper.width);
  const grammage = useSelector((state) => state.paper.grammage);
  const dispatch = useDispatch();
  const currentSheetsCount = useSelector((state) => state.count.count);
  const weight = useSelector((state) => state.paper.weight);
  const isCustom = useSelector((state) => state.paper.iscustom);
  const selectedPaperType = useSelector((state) => state.paper.papertype);
  const selectedPaperSize= useSelector((state) => state.paper.papersize);

  useEffect(() => {
    handleWeight();
  });

  const handleOnSelectedPaperType = (buttonValue: string) => {
    dispatch(setPaperType(buttonValue));
    dispatch(setPaperSize(""));
    dispatch(setIsCustom(false));
  };

  const handleWeight = () => {
    dispatch(
      setWeight(
        Math.floor(
          Number(length * width * 0.01 * 0.01 * grammage * currentSheetsCount)
        )
      )
    );
  };
  interface PaperSize {
    key: number;
    values: string[];
  }
  const papersizelist = PaperSizes[selectedPaperType.replace(/\s/g, "")];

  const handleOnSelectionPaperSize = (title: string) => {
    dispatch(setPaperSize(title));
    dispatch(setIsCustom(false));
    if (String([selectedPaperSize]) in papersizelist) {
      dispatch(setLength(papersizelist[selectedPaperSize]["length"]));
      dispatch(setWidth(papersizelist[selectedPaperSize]["width"]));
      dispatch(setGrammage(papersizelist[selectedPaperSize]["gram"]));
      dispatch(
        setWeight(length * width * 0.01 * 0.01 * grammage * currentSheetsCount)
      );
    }
  };

  const handleOnLengthChanged = (val: number) => {
    dispatch(setLength(val));
    dispatch(setIsCustom(true));
    dispatch(setPaperType("CUSTOM"));
  };

  const handleOnWidthChanged = (val: number) => {
    dispatch(setWidth(val));
    dispatch(setIsCustom(true));
    dispatch(setPaperType("CUSTOM"));
  };

  const handleOnGrammmageChanged = (val: number) => {
    dispatch(setGrammage(val));
    dispatch(setIsCustom(true));
    dispatch(setPaperType("CUSTOM"));
  };

  return (
    <View style={styles.screen}>
      <Top
        currentSheetsCount={currentSheetsCount}
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
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: Colors.white,
  },
});

const mapStateToProps = (state: { count: any }) => {
  const { count } = state;
  return { count };
};

export default connect(mapStateToProps)(PaperCalculator);
