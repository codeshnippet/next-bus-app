import React, { Component } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { getDepartures } from '../../../services/get-departures';

export class SingleStreet extends Component {

  state = {
    departures: [],
    now: new Date().getTime()
  };

  interval = null;

  componentWillMount() {
    this._loadDepartures();
    interval = setInterval(this._updateTimestamp.bind(this), 15000);
  }

  componentWillUnmount() {
    clearInterval(interval);
  }

  render() {
    return (
      <FlatList
        data={ this.state.departures }
        extraData={ this.state }
        renderItem={ ({item}) => {
          const minutes = Math.round((item.departureTime - this.state.now) / (1000 * 60));
          if(minutes >= 0) {
          return (
            <Text style={styles.item}>
              {item.label} {item.destination} in { minutes } minutes
            </Text>
            );
          }
          return null;
          }
        }
      />
    );
  }

  _loadDepartures = () => {
    getDepartures(this.props.id)
    .then(( { departures }) => {
      this.setState({
        departures: departures.map( d => {
          d.key = d.departureId;
          return d;
        })
      });
    })
  };

  _updateTimestamp = () => {
    this.setState({
      now: new Date().getTime()
    });
  };

}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    width: width,
  },
})
