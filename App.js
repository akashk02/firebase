import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Navigation from './js/Navigation';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navigation />
      </View>
    );
  }
}
