import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

export default class Navigation extends Component {
  state = {};

  render() {
    return <AppContainer />;
  }
}

class Home extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'red',
    },
  };

  state = {};

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Home </Text>
      </View>
    );
  }
}

const AppStackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Navigation: {
      screen: Navigation,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'green',
      },
    },
  },
);

const AppContainer = createAppContainer(AppStackNavigator);
