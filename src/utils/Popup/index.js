import {ToastAndroid} from 'react-native';

const showToast = messsage => {
  ToastAndroid.showWithGravityAndOffset(
    messsage,
    ToastAndroid.LONG,
    ToastAndroid.TOP,
    25,
    50,
  );
};

const showMessage = (messsage, background, color) => {
  showMessage({
    message: messsage,
    type: 'default',
    backgroundColor: background,
    color: color,
  });
};

export {showToast, showMessage};
