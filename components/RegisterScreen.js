import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

export default class RegisterScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'settings',
    drawerLockMode: 'locked-closed',
    drawerIcon: ({ tintColor }) => (
      <Icon
        name='settings'
        color='black'
      />
    ),
  };
  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
      isAllowed: true,
    }
  }

  accountCreated = () => {
    Alert.alert("Success", 'Account is created!')
    this.props.navigation.navigate("Login")
  }

  submitPressed = value => {
    fetch(`https://hackuci19-231913.appspot.com/graphql?query=mutation{
        createUser(email:"${this.state.email}", password:"${this.state.password}"){
          email
          password
        }
      }`, {method: 'POST'})
    .then(data => data.json())
    .then(data => 
      {
        console.log(data)
        data.data.createUser ? data.data.createUser.email && data.data.createUser.password ? this.accountCreated() : Alert.alert("Error", "Please input the elements") :  Alert.alert("Error", "Please input the elements") 
      }
    )
    .done()
  }

  render() {
    return (
      
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}
            />
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.submitPressed}>
          <Text style={styles.loginText}>Submit</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  inputContainer: {
      borderBottomColor: '#000000',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});