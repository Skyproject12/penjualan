import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../utils';
import {Gap} from '../../components';
import {TouchableOpacity} from 'react-native';
import { mutations } from '../../graphql';
import { useMutation } from '@apollo/client';

const renderItem = (key, value) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>{key}</Text>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>{value}</Text>
    </View>
  );
};

function ProductDetail({route}) {
  const {detailProduct} = route.params;
  const diskon =
    (Number(detailProduct.price) * Number(detailProduct.discount)) / 100;
  const harga = detailProduct.discount
    ? Number(detailProduct.price) - diskon
    : Number(detailProduct.price);

  const [transactionProduct] = useMutation(mutations.transactionProduct);

  return (
    <View style={{padding: 16, paddingHorizontal: 30, flex: 1}}>
      <View style={styles.image} />
      <Gap height={8} />
      <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
        {detailProduct.productName}
      </Text>
      <Gap height={16} />
      {renderItem('Price', `Rp. ${harga}`)}
      <Gap height={16} />
      {renderItem('Dimention', detailProduct.dimention)}
      <Gap height={16} />
      {renderItem('PriceUnit', detailProduct.unit)}
      <TouchableOpacity
        style={{
          flexWrap: 'wrap',
          position: 'absolute',
          bottom: 16,
          alignSelf: 'center',
        }}
        onPress={async () => {
          const {data} = await transactionProduct({
            variables: {
              productCode: detailProduct.productCode,
            },
          });
          Alert.alert('Berhasil', 'Berhasil menambahkan ke keranjang');
        }}
        >
        <Text
          style={{
            backgroundColor: Colors.PRIMARY,
            padding: 8,
            paddingHorizontal: 16,
            borderRadius: 6,
            color: Colors.WHITE,
            fontSize: 18,
          }}>
          Buy
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default ProductDetail;

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 60,
    alignSelf: 'center',
    marginTop: 100,
  },
});
