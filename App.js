import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';
import ProfileScreen from './components/ProfileScreen';
import PaymentScreen from './components/PaymentScreen';
import ContactScreen from './components/ContactScreen';
import DeleteCardScreen from './components/DeleteCardScreen';

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
  },
  PaymentScreen: {
    screen: PaymentScreen,
    title: "payment information"
  },
  ContactScreen: {
    screen: ContactScreen,
    title: 'contact',
  },
  DeleteCardScreen: {
    screen: DeleteCardScreen,
    title: 'delete card screen'
  }
},
{
  headerLayoutPreset: 'center',
});

const App = createAppContainer(MainNavigator);

export default App;