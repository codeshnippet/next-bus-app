import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { StreetsList } from './components/streets-list';

export class HomeScreen extends React.Component {

  _onRefreshClick = () => {
    console.log('click');
  }

  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StreetsList navigation={ this.props.navigation } />
        <Button title={"Refresh"} onPress={ () => this._onRefreshClick() } />
      </View>
    );
  }
};
