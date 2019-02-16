import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

class SettingsScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: '',
            headerBackTitle: null,
        }
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", padding: 15 }}>
                <Text style={styles.item}>are you sure? you will no longer be able to make donations! 😞</Text>
                <Text style={styles.red} onPress={() => {
                    
                }}>remove card</Text>
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
    red: {
        padding: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
    },
});

export default SettingsScreen