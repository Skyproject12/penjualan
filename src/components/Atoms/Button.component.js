import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors, Style} from '../../utils';
import {Icon} from 'react-native-elements';

function Button({
  text,
  onPress,
  styleContainer = {},
  styleText = {},
  disabled = false,
  nameIcon = null,
  typeIcon = null,
}) {
  if (disabled) {
    return (
      <View style={[styles.containerDisable, styleContainer]}>
        <Text style={Style.SB_16_HEADER1}>{text}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity
      style={[styles.container, styleContainer]}
      onPress={onPress}>
      {typeIcon && (
        <Icon
          name={nameIcon}
          type={typeIcon}
          size={24}
          color={Colors.PRIMARY}
          style={styles.icon}
        />
      )}
      <Text style={[Style.SB_16_WHITE, styleText]}>{text}</Text>
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 45,
    borderRadius: 6,
    backgroundColor: Colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerDisable: {
    backgroundColor: Colors.DISABLE,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginRight: 6,
  },
});
