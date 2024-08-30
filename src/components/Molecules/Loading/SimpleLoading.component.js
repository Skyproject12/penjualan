import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';
import {Colors, Style} from '../../../utils';

function SimpleLoading() {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" color={Colors.primary} />
      <Text style={Style.R_18_PRIMARY}>Loading</Text>
    </View>
  );
}

export default SimpleLoading;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.loadingBackground,
    width: '100%',
    height: '100%',
  },
});
