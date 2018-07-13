
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './home'
import { StackNavigator } from 'react-navigation';
import SecondScreen from './hukamnama'

class reactNavigationSample extends Component {
  static navigationOptions = {
    title: 'Home Screen',
  };

  render(){
    const { navigation } = this.props;

    return (
      <App navigation={ navigation }/>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: reactNavigationSample },
  SecondScreen: { screen: SecondScreen, title: 'ss' },
});

AppRegistry.registerComponent('hukamnamaSahib', () => SimpleApp);
