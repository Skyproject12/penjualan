import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Style} from '../../utils';

function Link({text, onPress, textStyle = null}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[Style.R_14_HEADER1, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}

export default Link;
