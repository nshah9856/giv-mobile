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
                    style={styles.item}
                    onPress={() => 
                        this.props.navigation.navigate('Payments')
                    }
                >
                    payment information
                </Text>
                <View style={styles.line}/>
                <Text
                    style={styles.item}
                    onPress={() => 
                        this.props.navigation.navigate('Home')
                    }
                >
                    delete account
                </Text>
                <View style={styles.line}/>
                <Text
                    style={styles.item}
                    onPress={() => 
                        Communications.email(['support@sharity.tech'],null,null,'About Sharity', null)
                    }
                >
                    contact us
                </Text>
                <View style={styles.line}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        padding: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    line: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
    },
});

export default SettingsScreen