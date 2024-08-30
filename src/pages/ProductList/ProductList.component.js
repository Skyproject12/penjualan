import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, ImageView} from '../../components';
import constants from '../../constants';
import {TouchableOpacity} from 'react-native';
import {Colors} from '../../utils';
import {FlatList} from 'react-native';
import {useMutation, useQuery} from '@apollo/client';
import {mutations, queries} from '../../graphql';
import {get} from 'lodash';
import {Alert} from 'react-native';

const renderItemDaftarProduct = ({item}, navigation, transactionProduct) => {
  const diskon = (Number(item.price) * Number(item.discount)) / 100;
  const harga = item.discount
    ? Number(item.price) - diskon
    : Number(item.price);

  return (
    <TouchableOpacity
      style={{flexDirection: 'row', marginBottom: 28}}
      onPress={() =>
        navigation.navigate('ProductDetail', {detailProduct: item})
      }>
      <View style={styles.image} />
      <View style={{marginLeft: 16}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          {item.productName}
        </Text>
        {!!item.discount && (
          <Text
            style={{
              textDecorationLine: 'line-through',
              fontSize: 14,
              fontWeight: 'bold',
            }}>
            {Number(item.price)}
          </Text>
        )}
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{harga}</Text>
        <Gap height={8} />
        <TouchableOpacity
          style={{flexWrap: 'wrap'}}
          onPress={async () => {
            const {data} = await transactionProduct({
              variables: {
                productCode: item.productCode,
              },
            });
            Alert.alert('Berhasil', 'Berhasil menambahkan ke keranjang');
          }}>
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
    </TouchableOpacity>
  );
};

function ProductList({navigation}) {
  const {refetch, data} = useQuery(queries.getAllProduct);
  const daftarProduct = get(data, 'getAllProduct', []);
  const [transactionProduct] = useMutation(mutations.transactionProduct);

  return (
    <View style={{padding: 16}}>
      <FlatList
        data={daftarProduct}
        renderItem={item =>
          renderItemDaftarProduct(item, navigation, transactionProduct)
        }
        keyExtractor={item => `'${item.productCode}'`}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        style={{flexWrap: 'wrap', alignSelf: 'center'}}
        onPress={async () => {
          navigation.navigate('Transaction');
        }}>
        <Text
          style={{
            backgroundColor: Colors.PRIMARY,
            padding: 8,
            paddingHorizontal: 16,
            borderRadius: 6,
            color: Colors.WHITE,
            fontSize: 18,
          }}>
          Checkout
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default ProductList;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 50,
  },
});
