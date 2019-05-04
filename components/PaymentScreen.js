import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

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
            <View style={{ flex: 1, padding: 50 }}>
        <Image resizeMode='contain' style={{width:"80%", height:"50%"}} source={require('../assets/card.png')}/>
                {/* <Text style={styles.item}>Visa Debit</Text>
                <Text style={styles.item}>**** **** **** 5432</Text>
                <Text style={styles.red} onPress={() => {
                    this.props.navigation.navigate('DeleteCardScreen')
                }}>Remove</Text> */}
            </View>
        );
    }
}

export default PaymentScreen

const styles = StyleSheet.create({
    item: {
        padding: 15,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    red: {
        padding: 15,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red',
    },
});