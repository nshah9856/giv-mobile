import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import HomeScreen from './HomeScreen'
import { Icon } from 'react-native-elements';


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

export default class LoginView extends Component {
  static navigationOptions = {
    // drawerLabel: 'settings',
    drawerLockMode: 'locked-closed',
    // drawerIcon: ({ tintColor }) => (
    //   <Icon
    //     name='settings'
    //     color='black'
    //   />
    // ),
  };
  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
      isAllowed: true,
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  incorrectInput = () => {
    Alert.alert("Alert", "Incorrect Email/Password has been given");
  }

  registerPressed = () => {
    this.props.navigation.navigate("Register")
  }

  loginSuccessful = () => {
    global.menu_available = true
    this.props.navigation.navigate("Home", {USER_EMAIL : this.state.email})
  }

  loginPressed = value => {
    fetch(`https://hackuci19-231913.appspot.com/graphql?query={user(email: "${this.state.email}"){password}}`)
    .then(data => data.json())
    .then(data => 
      {
        data.data.user ? data.data.user.password === this.state.password ? this.loginSuccessful() : this.incorrectInput() :  this.incorrectInput() 
      }
    )
    .done()
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden/>
        <Image source={require('../assets/sharity-small.png')}/>
        <View style={styles.inputContainer}>
          <Icon
            name='email'
            color='black'
          />
          <TextInput style={styles.inputs}
              placeholder="Email"
              placeholderTextColor='black'
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}
            />
        </View>
        
        <View style={styles.inputContainer}>
          <Icon
              name='keyboard'
              color='black'
          />
          <TextInput style={styles.inputs}
              placeholder="Password"
              placeholderTextColor='black'
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.loginPressed}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={this.registerPressed}>
            <Text>Register</Text>
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
    backgroundColor: '#b1fcbe',
  },
  inputContainer: {
      borderBottomColor: '#000000',
      backgroundColor: 'transparent',
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
    // color: 'black',
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "white",
  },
  loginText: {
    color: 'black',
  }
});