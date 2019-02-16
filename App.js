import React from 'react';
import { StyleSheet, Button, StatusBar, View } from 'react-native';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import { Icon } from 'react-native-elements'

import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';
import ProfileScreen from './components/ProfileScreen';
import PaymentScreen from './components/PaymentScreen';

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Icon
        name='menu'
        color='#ff0000'
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class MyProfileScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Icon
        name='menu'
        color='#ff0000'
      />
    ),
  };

  render() {
    return (
      <View>
        <StatusBar hidden/>
        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="Go back home"
        />
      </View>
    );
  }
}

const MyDrawerNavigator = createDrawerNavigator({
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
});

const MyApp = createAppContainer(MyDrawerNavigator);

export default MyApp;