// In App.js in a new project

import React from "react";
import { Image, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import HomeScreen from "./components/HomeScreen";
import Home from "./components/Home";
import Notifications from "./components/Notifications";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useFonts } from "expo-font";
const Drawer = createDrawerNavigator();


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
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Notifications"
          component={Notifications}
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
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator> */}
      <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen
          name="Notifications"
          component={Notifications}
          options={({ navigation, route } :any) => ({
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
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
