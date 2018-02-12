import React from 'react';
import { StackNavigator } from 'react-navigation';
import { HomeScreen } from './screens/home/screen';
import { DetailsScreen } from './screens/details/screen';

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Nearby Streets',
    },
  },
  Details: {
    screen: DetailsScreen
  },
});

export default RootNavigator;
