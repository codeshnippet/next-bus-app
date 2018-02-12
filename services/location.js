import React, { Component } from 'react';
import { Location, Permissions } from 'expo';
import { Platform } from 'react-native';

export const getLocationAsync = async () => {
  if (Platform.OS === 'android' && !Constants.isDevice) {
    // 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
    return null;
  }

  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== 'granted') {
    return null;
  }

  let location = await Location.getCurrentPositionAsync({});
  return location;
};
