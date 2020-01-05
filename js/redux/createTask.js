import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default class createTask extends Component {
  state = {
    taskName: '',
  };

  handleAdd = () => {};

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
        <TextInput
          style={{}}
          label="TaskName"
          value={this.state.taskName}
          onChangeText={text => this.setState({ text })}
        />

        <Button style={{ paddingTop: 10 }} onPress={this.handleAdd}>
          Add
        </Button>
      </View>
    );
  }
}
