import * as React from 'react';
import { Button, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Notifcations: { userId: string };
  Settings: undefined;
  Feed: { sort: 'latest' | 'top' } | undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Notifcations', 'MyStack'>;

function Notifications({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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

export default Notifications;