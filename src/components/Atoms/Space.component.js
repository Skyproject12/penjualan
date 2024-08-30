import {StyleSheet, View} from 'react-native';
import React from 'react';

function Space({height}) {
  return <View style={styles.container(height)} />;
}

export default Space;

const styles = StyleSheet.create({
  container: height => ({
    height: height,
    backgroundColor: '#F3F4F6',
  }),
});
