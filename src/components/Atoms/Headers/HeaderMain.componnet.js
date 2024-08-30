import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors, Style} from '../../../utils';
import Icon from 'react-native-vector-icons/MaterialIcons';

function HeaderMain({text, displayBack = false, onPress = () => {}}) {
  return (
    <View style={styles.container}>
      {displayBack && (
        <TouchableOpacity onPress={onPress}>
          <Icon
            name="arrow-back"
            size={24}
            color={Colors.HEADER1}
            style={styles.iconHeader}
          />
        </TouchableOpacity>
      )}
      <Text style={[Style.B_18_HEADER1, styles.textStyle]} numberOfLines={1}>
        {text}
      </Text>
    </View>
  );
}

export default HeaderMain;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: 56,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    paddingHorizontal: 16,
    elevation: 1,
    flexDirection: 'row',
  },
  iconHeader: {
    marginRight: 16,
  },
  textStyle: {
    flex: 1,
  },
});
