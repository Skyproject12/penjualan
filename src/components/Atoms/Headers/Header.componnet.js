import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {Colors, Style} from '../../../utils';

function Header({onPress, text}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          name="arrow-back"
          size={24}
          color={Colors.HEADER1}
          style={styles.iconHeader}
        />
      </TouchableOpacity>
      <View style={styles.containerText}>
        <Text style={Style.B_18_HEADER1} numberOfLines={1}>
          {text}
        </Text>
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  containerText: {
    width: Dimensions.get('window').width - 32,
    alignItems: 'center',
  },
  iconHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
