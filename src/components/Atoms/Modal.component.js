import {StyleSheet, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

function ModalPublic({isModalVisible, setModalVisible, renderItem}) {
  return (
    <View style={styles.container}>
      <Modal
        isVisible={isModalVisible}
        animationIn="slideInUp"
        onBackdropPress={() => setModalVisible(false)}>
        <View>{renderItem}</View>
      </Modal>
    </View>
  );
}

export default ModalPublic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
