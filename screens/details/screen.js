import React, { Component } from 'react';
import { View } from 'react-native';
import { SingleStreet } from './components/single-street';

export class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}`,
  });

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <SingleStreet id={ params.id } />
      </View>
    );
  }
};
