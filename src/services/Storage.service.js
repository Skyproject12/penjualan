import AsyncStorage from '@react-native-community/async-storage';
import CryptoJS from 'crypto-js';

const KEYS = {
  TOKEN: 'token',
  ASYNC_STORAGE: 'async-storage',
};

const get = async key => {
  try {
    const encrypted = await AsyncStorage.getItem(key);
    const decrypted = CryptoJS.AES.decrypt(encrypted, KEYS.ASYNC_STORAGE);
    const data = decrypted.toString(CryptoJS.enc.Utf8);
    return data;
  } catch (e) {
    return null;
  }
};

const set = async (key, data) => {
  try {
    const encrypted = CryptoJS.AES.encrypt(data, KEYS.ASYNC_STORAGE).toString();
    await AsyncStorage.setItem(key, encrypted);
    return true;
  } catch (e) {
    return false;
  }
};

const saveToken = async opts => {
  try {
    const encrypted = CryptoJS.AES.encrypt(
      opts.token,
      KEYS.ASYNC_STORAGE,
    ).toString();
    await AsyncStorage.setItem(KEYS.TOKEN, encrypted);
    return true;
  } catch (error) {
    return false;
  }
};

const clearSession = async () => {
  await AsyncStorage.removeItem(KEYS.TOKEN);
};

const getToken = async () => {
  try {
    const token = await get(KEYS.TOKEN);
    return token;
  } catch (error) {
    return null;
  }
};

export default {
  get,
  set,
  saveToken,
  getToken,
  clearSession,
};
