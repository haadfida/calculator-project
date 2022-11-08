import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "./HomeScreen";
import Settings from "./Settings";

const Tab = createMaterialTopTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default function Home() {
  return <Tabs />;
}
