import {StyleSheet, Dimensions, View} from 'react-native';
import React from 'react';
import {Colors} from '../../utils';

function Line({style}) {
  return <View style={[styles.containerLine, style]} />;
}

export default Line;

const styles = StyleSheet.create({
  containerLine: {
    backgroundColor: Colors.LINE,
    width: Dimensions.get('window').width - 32,
    height: 1,
  },
});
