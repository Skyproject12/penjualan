import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StaticImage} from '../../Atoms';
import {ILJaringanBermasalah} from '../../../assets';
import {Colors, Style} from '../../../utils';

function Loading() {
  return (
    <View style={styles.containerLoading}>
      <StaticImage source={ILJaringanBermasalah} height={120} />
      <Text style={[Style.R_16_HEADER1, styles.textLoading]}>Loading ...</Text>
    </View>
  );
}

export default Loading;

const styles = StyleSheet.create({
  containerLoading: {
    backgroundColor: Colors.WHITE,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  textLoading: {
    marginTop: 12,
  },
});
