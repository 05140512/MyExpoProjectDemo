import { Text, Button, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import React from "react";

export default function FaXian({ navigation }: any) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
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
    </SafeAreaView>
  );
}
