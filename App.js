// In App.js in a new project

import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Top from "./components/Top";
import Middle from "./components/Middle";
import Bottom from "./components/Bottom";
import { useFonts } from "expo-font";
import PaperSizes from "./constants/paperSize";

import { Colors } from "react-native/Libraries/NewAppScreen";

function HomeScreen() {
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [grammage, setGrammage] = useState(0);
  const [currentSheetsCount, setCurrentSheetsCount] = useState(0);
  const [weight, setWeight] = useState(0);

  const [selectedPaperType, setSelectedPaperTyped] = useState("DIN A");
  const [selectedPaperSize, setSelectedPaperSize] = useState("");

  useEffect(() => {
    handleWeight();
  });

  const handleOnSelectedPaperType = (button) => {
    setSelectedPaperTyped(button.name);
    setSelectedPaperSize(false);
  };

  const handleWeight = () => {
    setWeight(parseInt(length * width * 0.01 * 0.01 * grammage * currentSheetsCount));
  };
  let papersizelist = PaperSizes[selectedPaperType.replace(/\s/g, "")];
  // console.log(papersizelist);
  const handleOnSelectionPaperSize = (title) => {
    setSelectedPaperSize(title);
    if ([selectedPaperSize] in papersizelist) {
      setLength(
        papersizelist[selectedPaperSize]["length"]
      );
      setWidth(
        papersizelist[selectedPaperSize]["width"]
      );
      setGrammage(
        papersizelist[selectedPaperSize]["gram"]
      );
      setWeight(
        parseInt(length * width * 0.01 * 0.01 * grammage * currentSheetsCount)
      );
    }
  };

  const handleOnLengthChanged = (val) => {
    setLength(val);
  };

  const handleOnWidthChanged = (val) => {
    setWidth(val);
  };

  const handleOnGrammmageChanged = (val) => {
    setGrammage(val);
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
        setSelected={setSelectedPaperTyped}
        setSelectedPaperSize={setSelectedPaperSize}
        selectedPaperType={selectedPaperType}
        selectedPaperSize={selectedPaperSize}
        handleOnSelectedPaperType={handleOnSelectedPaperType}
        handleOnSelectionPaperSize={handleOnSelectionPaperSize}
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

const Stack = createStackNavigator();
// https://stackoverflow.com/questions/66967903/undefined-is-not-an-object-evaluating-route-key-react-navigation
function App() {
  let [fontsLoaded, error] = useFonts({
    Montserrat_400Regular: require("./assets/fonts/Montserrat-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <HomeScreen />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation, route }) => ({
            headerTitleAlign: "left",
            headerTitle: "Paper Calculator",
            // Add a placeholder button without the `onPress` to avoid flicker
            // https://reactnavigation.org/docs/header-buttons/
            headerRight: () => (
              <Pressable
                onPress={() => {}}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
                    marginEnd: 20,
                  },
                ]}
              >
                <Image source={require("./assets/menu-icon.png")} />
              </Pressable>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
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

export default App;
