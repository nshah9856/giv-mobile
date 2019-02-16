import {createDrawerNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';
import ProfileScreen from './components/ProfileScreen';
import PaymentScreen from './components/PaymentScreen';
import LoginScreen from './components/LoginScreen';

const MyDrawerNavigator = createDrawerNavigator({
  Login: {
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
  }
});

const MyApp = createAppContainer(MyDrawerNavigator);

export default MyApp;