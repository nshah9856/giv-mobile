import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import { StyleSheet } from 'react-native';

import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';
import ProfileScreen from './components/ProfileScreen';
import PaymentScreen from './components/PaymentScreen';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';

import SideMenu from './SideMenu';

global.menu_available = false;

const MyDrawerNavigator = createDrawerNavigator(
  {
    Login:{
      screen: LoginScreen,
    },
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
    },
    Register:{
      screen: RegisterScreen
    }
  },
  {
    contentOptions: {
      activeTintColor: '#9cd585'
    },
    contentComponent: SideMenu,
  }  
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


const MyApp = createAppContainer(MyDrawerNavigator);

export default MyApp;