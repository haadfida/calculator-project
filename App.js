// In App.js in a new project

import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Card from "./components/Card";
import Counter from "./components/Counter";
import UpperCard from "./components/UpperCard";

function HomeScreen() {

  return (
    <View style={styles.screen}>
      <UpperCard />
      <Card style={styles.cardContainer}>
        <Text style={{ ...styles.textSizePrimary, ...styles.textColor }}>
          4.99g
        </Text>
        <Text style={{ ...styles.textSizeSecondary, ...styles.textColor }}>
          Per copy
        </Text>
      </Card>
    </View>
  );
}

const Stack = createStackNavigator();
// https://stackoverflow.com/questions/66967903/undefined-is-not-an-object-evaluating-route-key-react-navigation
function App() {
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
                <Image
                  source={require("./assets/menu-icon.png")}
                />
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
  cardContainer: {
    margintop: -16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 400,
    height: 100,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#8bd9fb",
  },
  textSizePrimary: {
    fontSize: 30,
  },
  textSizeSecondary: {
    fontSize: 15,
  },
  textColor: {
    color: "white",
  },
});

export default App;
