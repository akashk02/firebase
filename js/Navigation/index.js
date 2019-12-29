import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Button } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'native-base';
export default class Navigation extends Component {
  state = {};

  componentDidMount() {
    console.log('createMaterialBottomTabNavigator typeof', AppTabNavigator);
  }

  render() {
    return <AppContainer />;
  }
}

class Home extends Component {
  static navigationOption = {
    headerStyle: {
      backgroundColor: 'green',
    },
  };

  state = {};

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> HomeScreen </Text>
        <Button onPress={() => this.props.navigation.navigate('Dashboard')}>
          Login
        </Button>
        <Button onPress={() => this.props.navigation.navigate('')}>
          SignUp
        </Button>
      </View>
    );
  }
}

class Dashboard extends Component {
  render() {
    return (
      <View>
        <Text> Dashboard </Text>
      </View>
    );
  }
}

class Feed extends Component {
  render() {
    return (
      <View>
        <Text> Feed </Text>
        <Button onPress={() => this.props.navigation.navigate('Detail')}>
          GO to Details
        </Button>
      </View>
    );
  }
}

const Detail = props => (
  <View>
    <Text>Details</Text>
  </View>
);

class Profile extends Component {
  render() {
    return (
      <View>
        <Text> Profiel </Text>
      </View>
    );
  }
}

class Setting extends Component {
  render() {
    return (
      <View>
        <Text> Setting </Text>
      </View>
    );
  }
}

const FeedStack = createStackNavigator(
  {
    Feed,
    Detail,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      console.log('sav', navigation);
      return {
        headerTitle: 'feed',

        headerLeft: (
          <Icon
            ios="ios-menu"
            android="md-menu"
            onPress={() => navigation.openDrawer()}
            style={{ fontSize: 20, color: 'blue', marginLeft: 10 }}
          />
        ),
      };
    },
  },
);

const AppTabNavigator = createMaterialBottomTabNavigator(
  {
    Feed: { screen: FeedStack },
    Profile: { screen: Profile },
    Settings: { screen: Setting },
  },
  {
    navigationOptions: ({ navigation }) => {
      console.log(navigation);
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: null,
        headerTitle: routeName,
      };
    },
  },
);

const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: { screen: AppTabNavigator },
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      console.log('sav', navigation);
      return {
        headerLeft: (
          <Icon
            ios="ios-menu"
            android="md-menu"
            onPress={() => navigation.openDrawer()}
            style={{ fontSize: 20, color: 'blue', marginLeft: 10 }}
          />
        ),
      };
    },
  },
);

const DashBoardDrawerNaviagator = createDrawerNavigator({
  Dashboard: { screen: DashboardStackNavigator },
});

const AppSwitchNavigator = createSwitchNavigator({
  Home: { screen: Home },
  Dashboard: { screen: DashBoardDrawerNaviagator },
});

const AppContainer = createAppContainer(AppSwitchNavigator);
