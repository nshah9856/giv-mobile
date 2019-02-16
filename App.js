import {createDrawerNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';
import ProfileScreen from './components/ProfileScreen';
import PaymentScreen from './components/PaymentScreen';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';

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
    }
  }  
);

const MyApp = createAppContainer(MyDrawerNavigator);

export default MyApp;