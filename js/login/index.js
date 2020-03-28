import { firebase } from '@react-native-firebase/auth';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TextInput, TouchableRipple } from 'react-native-paper';

export default class index extends Component {
  state = { email: '', password: '' };
  //new code

  handleSingIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(data => console.log(data))
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);

        // ...
      });
  };

  handleSingUp = () => {};

  render() {
    console.log(this.state);

    return (
      <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
        <TextInput
          label="Email"
          style={{ backgroundColor: 'rgba(52, 52, 52, 0.1)' }}
          value={this.state.text}
          onChangeText={email => this.setState({ email })}
          selectionColor={'blue'}
        />

        <TextInput
          label="Password"
          style={{ backgroundColor: 'rgba(52, 52, 52, 0.1)', marginTop: 50 }}
          value={this.state.text}
          onChangeText={password => this.setState({ password })}
          selectionColor={'blue'}
        />

        <TouchableRipple
          style={{
            marginTop: 40,
            alignSelf: 'center',
            paddingHorizontal: 30,
            paddingVertical: 15,
            width: 180,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(52, 52, 52, 0.1)',
          }}
          onPress={this.handleSingIn}>
          <Text>Sing In</Text>
        </TouchableRipple>

        <TouchableRipple
          style={{
            marginTop: 40,
            alignSelf: 'center',
            paddingHorizontal: 30,
            paddingVertical: 15,
            width: 180,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(52, 52, 52, 0.1)',
          }}
          onPress={this.handleSingUp}>
          <Text>Sing Up</Text>
        </TouchableRipple>
      </View>
    );
  }
}
