import React from 'react';
import { Button, TouchableOpacity, View, Text, StyleSheet, StatusBar, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DetailScreen from '../screens/DetailScreen';

import { Ionicons } from '@expo/vector-icons'; // Expo 内置图标库

import HomeIcon from '../../assets/svgs/clientRate.svg'
import ProfileIcon from '../../assets/svgs/circleCheck.svg'
import SettingsIcon from '../../assets/svgs/demographicQuestions.svg'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Tab 内部导航
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true, // 显示顶部导航
        tabBarActiveTintColor: 'tomato', // 选中时的颜色
        tabBarInactiveTintColor: 'gray', // 未选中时的颜色
        statusBarTranslucent: true,
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';
          if (route.name === 'Home') return <HomeIcon width={size} height={size} fill={color} />;
          else if (route.name === 'Profile') return <ProfileIcon width={size} height={size} fill={color} />;
          else if (route.name === 'Settings') return <SettingsIcon width={size} height={size} fill={color} />;
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

// 自定义Header组件
function CustomHeader({ navigation, title }: { navigation: any; title: string }) {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.headerContainer}>
        {/* 左侧返回箭头 */}
        <TouchableOpacity 
          style={styles.headerLeft} 
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="tomato" />
        </TouchableOpacity>
        
        {/* 中间标题 */}
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
        
        {/* 右侧分享按钮 */}
        <TouchableOpacity 
          style={styles.headerRight}
          onPress={() => {
            // 这里可以添加分享功能
            console.log('分享按钮点击');
          }}
        >
          <Ionicons name="share-outline" size={24} color="tomato" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// 外层 Stack
export default function AppNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="white"
          translucent={false}
        />
        <Stack.Navigator>
          {/* 主 Tab 页 */}
          <Stack.Screen
            name="MainTabs"
            component={TabNavigator}
            options={{ headerShown: false }} // 隐藏 Stack 自带的头部，用 Tab 的头部
          />
          {/* 详情页 */}
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={({ navigation }) => ({
              header: () => <CustomHeader navigation={navigation} title="详情" />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

// 样式
const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    // elevation: 4,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 2,
  },
  headerLeft: {
    width: 40,
    alignItems: 'flex-start',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'tomato',
  },
  headerRight: {
    width: 40,
    alignItems: 'flex-end',
  },
});