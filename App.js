// In App.js in a new project

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Button, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Top from "./components/Top";
import Middle from "./components/Middle";
import Bottom from "./components/Bottom";
import { useFonts } from "expo-font";
import Size from "./constants/size";
import {
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic,
} from "@expo-google-fonts/montserrat";
import { Colors } from "react-native/Libraries/NewAppScreen";

function HomeScreen() {
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [gram, setGram] = useState(0);
  const [currentCount, setCurrentCount] = useState(0);
  const [weight, setWeight] = useState(0);

  const [selected, setSelected] = useState("DIN A");
  const [selectedSecondary, setSelectedSecondary] = useState(false);

  const handleOnSelection = (button) => {
    setSelected(button.name);
    setSelectedSecondary(false);
  };

  const weightHandler = () => {
    setWeight(length * width * 0.01 * 0.01 * gram * currentCount);
  };

  const handleOnSelectionSecondary = (title) => {
    setSelectedSecondary(title);
    if ([selectedSecondary] in Size[selected.replace(/\s/g, "")]) {
      setLength(Size[selected.replace(/\s/g, "")][selectedSecondary]["length"]);
      setWidth(Size[selected.replace(/\s/g, "")][selectedSecondary]["width"]);
      setGram(Size[selected.replace(/\s/g, "")][selectedSecondary]["gram"]);
      setWeight(parseInt(length * width * 0.01 * 0.01 * gram * currentCount));
    }
  };

  const handleOnChangeLength = (val) => {
    setLength(val);
  };

  const handleOnChangeWidth = (val) => {
    setWidth(val);
  };

  const handleOnChangeGram = (val) => {
    setGram(val);
  };

  useEffect(() => {
    setWeight(parseInt(length * width * 0.01 * 0.01 * gram * currentCount));
  });

  return (
    <View style={styles.screen}>
      <Top
        currentCount={currentCount}
        setCurrentCount={setCurrentCount}
        weightHandler={weightHandler}
        weight={weight}
      />
      <Middle
        setSelected={setSelected}
        setSelectedSecondary={setSelectedSecondary}
        selected={selected}
        selectedSecondary={selectedSecondary}
        handleOnSelection={handleOnSelection}
        handleOnSelectionSecondary={handleOnSelectionSecondary}
      />
      <Bottom
        handleOnChangeLength={handleOnChangeLength}
        handleOnChangeWidth={handleOnChangeWidth}
        handleOnChangeGram={handleOnChangeGram}
        length={length}
        width={width}
        gram={gram}
      />
    </View>
  );
}

const Stack = createStackNavigator();
// https://stackoverflow.com/questions/66967903/undefined-is-not-an-object-evaluating-route-key-react-navigation
function App() {
  let [fontsLoaded, error] = useFonts({
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic,
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
