import {StyleSheet, View} from 'react-native';
import React from 'react';

function Gap({width, height}) {
  return <View style={styles.containerGap(width, height)} />;
}

export default Gap;
const styles = StyleSheet.create({
  containerGap: (width = 0, height = 0) => ({
    width: width,
    height: height,
  }),
});
