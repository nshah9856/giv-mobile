import React from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

class ContactScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'contact us',
            headerBackTitle: null,
        }
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{ flex: 1, justifyContent: "center" }}>
                <TextInput
                    placeholder='type message here'
                    placeholderTextColor='#dddddd'
                    style={{flexDirection: 'row'}}
                />
                <Text>Send</Text>
            </View>
        );
    }
}

export default ContactScreen

const styles = StyleSheet.create({
    item: {
        padding: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
});