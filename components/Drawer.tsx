import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./HomeScreen";
import Settings from "./Settings";
import Profile from "./Profile";

const Drawer = createDrawerNavigator();

function CalculatorDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

export default CalculatorDrawer;