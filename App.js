import React from 'react';
import { StyleSheet, Button, StatusBar, View } from 'react-native';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import { Icon } from 'react-native-elements'

import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';
import ProfileScreen from './components/ProfileScreen';
import PaymentScreen from './components/PaymentScreen';

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
    Payments: {
      screen: PaymentScreen,
    }
  },
  {
    contentOptions: {
      activeTintColor: '#9cd585'
    }
  }  
);

const MyApp = createAppContainer(MyDrawerNavigator);

export default MyApp;