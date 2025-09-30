import React from 'react';
// import { View, Text, Button, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import FaXian from './FaXian';
import GuanZhu from './GuanZhu';

const Tab = createMaterialTopTabNavigator();

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Tab.Navigator>
        <Tab.Screen name="发现" component={FaXian} />
        <Tab.Screen name="关注" component={GuanZhu} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
