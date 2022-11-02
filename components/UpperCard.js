import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button, Pressable } from "react-native";

// import Colors from "../constants/colors";
import Card from "./Card";
import Counter from "./Counter";

const UpperCard = (props) => {
  const [currentCount, setCurrentCount] = useState(0);

  const renderPaperContent = (props) => {
    if (currentCount <= 1 || currentCount < 5) {
      return <Image source={require("../assets/sheets/sheet1.png")} />;
    } else if (currentCount >= 5 && currentCount < 10) {
      return <Image source={require("../assets/sheets/sheet2.png")} />;
    } else if (currentCount >= 10 && currentCount < 25) {
      return <Image source={require("../assets/sheets/sheet3.png")} />;
    } else if (currentCount >= 25 && currentCount < 50) {
      return <Image source={require("../assets/sheets/sheet4.png")} />;
    } else if (currentCount >= 50) {
      return <Image source={require("../assets/sheets/sheet5.png")} />;
    }
  };

  const configureCounter = (timesPressed) => {
    let textLog = 0;
    if (timesPressed > 0) {
      textLog = timesPressed;
    } else {
      textLog = 0;
    }
    setCurrentCount(timesPressed);

    return textLog;
  };
  return (
    <Card style={styles.upperCardContainer}>
      {renderPaperContent()}
      <Counter configureCounter={configureCounter}></Counter>
    </Card>
  );
};

const styles = StyleSheet.create({
  upperCardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    width: 400,
    height: 200,
    backgroundColor: "#6acafb",
    maxHeight: "80%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default UpperCard;
