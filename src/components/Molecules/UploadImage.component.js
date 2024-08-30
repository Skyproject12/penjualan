import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {Button} from '../Atoms';
import {Colors, Style} from '../../utils';
import ImagePicker from 'react-native-image-picker';

const handleImagePicker = (
  setImages,
  setPhotoForDB,
  imagesProps,
  setImagesProps,
) => {
  ImagePicker.launchImageLibrary({}, response => {
    if (!response.didCancel && !response.error) {
      const source = {uri: response.uri};

      if (imagesProps === 'Kosong') {
        setImages(source);
      } else {
        setImagesProps(source);
      }
      setPhotoForDB(`data:${response.type};base64, ${response.data}`);
    }
  });
};

function UploadImage({
  setPhotoForDB,
  imagesProps = 'Kosong',
  setImagesProps = () => {},
  titleText = 'Bukti Transfer',
}) {
  const [images, setImages] = useState('');

  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={Style.R_15_HEADER1}>{titleText}</Text>
          <Text style={Style.R_14_HEADER2}>* wajib</Text>
        </View>
        <Button
          nameIcon="image"
          typeIcon="Entypo"
          text="TAMBAH GAMBAR"
          styleContainer={styles.containerGambar}
          onPress={() =>
            handleImagePicker(
              setImages,
              setPhotoForDB,
              imagesProps,
              setImagesProps,
            )
          }
          styleText={[styles.textGambar, Style.R_12_PRIMARY]}
        />
      </View>
      {!!images && <Image source={images} style={styles.image} />}
      {!!imagesProps && imagesProps !== 'Kosong' && (
        <Image source={imagesProps} style={styles.image} />
      )}
    </View>
  );
}

export default UploadImage;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerGambar: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.PRIMARY,
    borderWidth: 1,
    elevation: 1,
    height: 43.9,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  textGambar: {
    textAlign: 'center',
  },
  image: {
    width: 110,
    height: 120,
    borderRadius: 6,
    marginTop: 12,
  },
});
