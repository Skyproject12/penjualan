import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1,
    padding: 16,
  },
  textTitle: {
    marginTop: 8,
    marginBottom: 8,
  },
  textDescription: {
    width: 215,
    textAlign: 'center',
    marginBottom: 16,
  },
  containerHeader: {
    alignItems: 'center',
    width: Dimensions.get('window').width - 32,
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  textMasuk: {
    marginTop: 16,
  },
  containerPassword: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  textLinkDaftar: {
    textAlign: 'center',
    marginTop: 12,
  },
});

export default styles;
