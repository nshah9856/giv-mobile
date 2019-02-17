import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

class PaymentScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'settings',
        drawerIcon: ({ tintColor }) => (
          <Icon
            name='settings'
            color='black'
          />
        ),
      };
    static navigationOptions = ({navigation}) => {
        return {
            title: '',
            headerBackTitle: null,
        }
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{ flex: 1, justifyContent: "center", padding: 50 }}>
                <Text style={styles.item}>Visa Debit</Text>
                <Text style={styles.item}>**** **** **** 5432</Text>
                <Text style={styles.red} onPress={() => {
                    this.props.navigation.navigate('DeleteCardScreen')
                }}>Remove</Text>
            </View>
        );
    }
}

export default PaymentScreen

const styles = StyleSheet.create({
    item: {
        padding: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    red: {
        padding: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
    },
});