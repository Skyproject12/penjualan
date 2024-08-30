import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StaticImage from './Image/StaticImage.component';
import {Style} from '../../utils';

function TextImage({
  src,
  text,
  width = null,
  height = null,
  textStyle = null,
  iconStyle = null,
}) {
  return (
    <View style={styles.containerTextIcon}>
      <StaticImage
        source={src}
        width={width || 12}
        height={height || 12}
        style={[styles.imageInfo, iconStyle]}
      />
      <Text style={[Style.R_13_HEADER1, textStyle]}>{text}</Text>
    </View>
  );
}

export default TextImage;

const styles = StyleSheet.create({
  containerTextIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageInfo: {
    marginRight: 5,
  },
});
