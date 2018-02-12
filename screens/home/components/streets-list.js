import React from 'react';
import { Dimensions, Text, StyleSheet, FlatList, TouchableOpacity, View, Alert } from 'react-native';
import { getNearbyStations } from '../../../services/get-nearest-stations';
import { getLocationAsync } from '../../../services/location';

export class StreetsList extends React.Component {

  state = {
    stops: [],
    errorMessage: null,
  };

  componentWillMount() {
    this._loadPosition();
  }

  render() {
    return (
      <FlatList
        data={
          this.state.stops.map( (stop) => { return { key: stop.id, name: stop.name }; })
        }
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => this._onStopNamePressed(item)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>{item.name}</Text>
              </View>
            </TouchableOpacity>
            );
          }
        }
      />
    );
  }

  _onStopNamePressed = (stop) => {
    this.props.navigation.navigate('Details', {id: stop.key, name: stop.name});
  }

  _loadPosition = () => {
    getLocationAsync()
    .then( ( { coords } ) => {
      this._loadStations(coords.latitude, coords.longitude);
    });
  }

  _loadStations = (latitude, longitude) => {
    getNearbyStations(latitude, longitude)
    .then(( { locations }) => {
      this.setState({
        stops: locations.map(location => {
          return {
            id: location.id,
            name: location.name
          }
        })
      });
    })
  };
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  button: {
    marginBottom: 5,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    width: width,
  },
  buttonText: {
    padding: 10,
    color: 'white'
  }
});
