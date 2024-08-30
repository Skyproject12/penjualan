import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {StaticImage} from '../Atoms';
import {ICMinus, ICPluss} from '../../assets';
import {Colors} from '../../utils';

const renderPluss = (counter, setCounter, maxCount) => {
  if (counter < maxCount) {
    setCounter(counter + 1);
  }
};

const renderMinus = (counter, setCounter) => {
  if (counter > 1) {
    setCounter(counter - 1);
  }
};

function Counter({counter, setCounter, maxCount}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => renderMinus(counter, setCounter)}>
        <StaticImage source={ICMinus} width={40} />
      </TouchableOpacity>
      <View style={styles.containerInput}>
        <Text>{counter}</Text>
      </View>
      <TouchableOpacity
        onPress={() => renderPluss(counter, setCounter, maxCount)}>
        <StaticImage source={ICPluss} width={40} />
      </TouchableOpacity>
    </View>
  );
}

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerInput: {
    borderRadius: 6,
    width: 40,
    marginHorizontal: 8,
    borderWidth: 0.6,
    borderColor: Colors.BORDER,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
