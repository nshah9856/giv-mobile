import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import Communications from 'react-native-communications'

const buttons = [
    {
        text: 'payment information',
        onpress: 'PaymentScreen',
    },
    {
        text: 'delete account',
        screen: 'HomeScreen',
    },
    {
        text: 'contact us',
        screen: 'ContactScreen',
    },
]

class SettingsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'settings',
        drawerIcon: ({ tintColor }) => (
          <Icon
            name='settings'
            color='black'
          />
        ),
      };

    render() {
        return (
            <View>
                <Text
                    style={styles.navItemStyle}
                    onPress={() => 
                        this.props.navigation.navigate('Payments')
                    }
                >
                    payment information
                </Text>
                <Text
                    style={styles.navItemStyle}
                    onPress={() => 
                        this.props.navigation.navigate('Home')
                    }
                >
                    delete account
                </Text>
                <Text
                    style={styles.navItemStyle}
                    onPress={() => 
                        Communications.email(['support@sharity.tech'],null,null,'About Sharity', null)
                    }
                >
                    contact us
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navItemStyle: {
      padding: 15,
      textAlign: 'center',
      fontSize: 18,
    },
  }
);

export default SettingsScreen