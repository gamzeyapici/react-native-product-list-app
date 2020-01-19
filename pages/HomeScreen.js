import React from 'react';
import {
  Button,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome Product List App',
  };
  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <Button
        title="START APP"
        onPress={() => navigate('ProductList')}
      />
    );
  }
}