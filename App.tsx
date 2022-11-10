// In App.js in a new project

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import PaperCalculator from "./components/PaperCalculator";
import TabNavigator from "./components/TabNavigator";
import Notifications from "./components/Notifications";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useFonts } from "expo-font";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Notifcations: { userId: string };
  Settings: undefined;
  Feed: { sort: "latest" | "top" } | undefined;
};

type Props = NativeStackScreenProps<
  RootStackParamList,
  "Notifcations",
  "MyStack"
>;



const Stack = createStackNavigator();
// https://stackoverflow.com/questions/66967903/undefined-is-not-an-object-evaluating-route-key-react-navigation
function App() {
  let [fontsLoaded, error] = useFonts({
    Montserrat_400Regular: require("./assets/fonts/Montserrat-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <PaperCalculator />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
      >
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="PaperCalculator" component={PaperCalculator} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
