// In App.js in a new project

import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Top from "./components/Top";
import { useFonts } from "expo-font";
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

function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Top />
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
  },
});

export default App;
