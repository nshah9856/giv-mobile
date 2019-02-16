import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { Icon } from 'react-native-elements'

import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';
import ProfileScreen from './components/ProfileScreen';

const MainNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
  SettingsScreen: {
    screen: SettingsScreen,
    title: "settings",
  },
  ProfileScreen: {
    screen: ProfileScreen,
    title: "profile"
  }
},
{
  headerLayoutPreset: 'center',
});

const App = createAppContainer(MainNavigator);

export default App;