import React, { Component } from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CreateTask from './createTask';
import UpdateTask from './updateTask';
import DeleteTask from './deleteTask';
import ReadTask from './readTask';
import { Button } from 'react-native-paper';

class App extends Component {
  static navigationOptions = {
    header: null,
  };

  state: {};

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          style={{ padding: 10, margin: 10 }}
          onPress={() => {
            this.props.navigation.navigate('ReadTask');
          }}>
          Show tasks
        </Button>

        <Button
          style={{ padding: 10, margin: 10 }}
          onPress={() => {
            this.props.navigation.navigate('CreateTask');
          }}>
          Add Task
        </Button>

        <Button
          style={{ padding: 10, margin: 10 }}
          onPress={() => {
            this.props.navigation.navigate('UpdateTask');
          }}>
          Update Task
        </Button>

        <Button
          style={{ padding: 10, margin: 10 }}
          onPress={() => {
            this.props.navigation.navigate('DeleteTask');
          }}>
          Delete Task
        </Button>
      </View>
    );
  }
}

const AppStack = createStackNavigator({
  App,
  CreateTask,
  ReadTask,
  UpdateTask,
  DeleteTask,
});

const AppContainer = createAppContainer(AppStack);

export default AppContainer;
