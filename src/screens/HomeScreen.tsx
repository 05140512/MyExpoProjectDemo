import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>🏠 Home Screen (Expo)</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Go to Stack Detail"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
}
