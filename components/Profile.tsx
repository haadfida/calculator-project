import * as React from 'react';
import { Button, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Settings: undefined;
  Feed: { sort: 'latest' | 'top' } | undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Profile', 'MyStack'>;
function Profile({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate('Notifications')}
      />
    </View>
  );
}

export default Profile;
