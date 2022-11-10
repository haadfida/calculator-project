import * as React from "react";
import { Button, StyleSheet, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import HomeScreen from "./PaperCalculator";
import Profile from "./Profile";
import { createDrawerNavigator } from "@react-navigation/drawer";

type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Notifcations: { userId: string };
  Settings: undefined;
  Feed?: { sort: "latest" | "top" } | undefined;
};

type Props = NativeStackScreenProps<
  RootStackParamList,
  "Notifcations",
  "MyStack"
>;

function Notifications({ navigation }: Props) {
  return (
    <>
      <Drawers />
    </>
  );
}
const Drawer = createDrawerNavigator();

function NotificationsHome({ navigation }: Props) {
  return (
    <View style={styles.screen}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      />
      <Button
        title="Go to HomeScreen"
        onPress={() => navigation.navigate("Home")}
      />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
      {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
    </View>
  );
}

function Drawers() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="NotificationsHome" component={NotificationsHome} />
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: "center", justifyContent: "center" },
});

export default Notifications;
