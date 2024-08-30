import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { get } from 'lodash';
import { mutations, queries } from '../../graphql';
import { TouchableOpacity } from 'react-native';
import { Gap } from '../../components';
import { Alert } from 'react-native';
import { Colors } from '../../utils';

const renderItemDaftarProduct = ({item}, navigation) => {
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
        <Text>{item.quantity} PCS</Text>
        <Text>SubTotal Rp. {item.subTotal}</Text>
      </View>
    </TouchableOpacity>
  );
};

function Transaction({navigation}) {
  const {refetch, data} = useQuery(queries.getAllTransaction);
  const daftarProduct = get(data, 'getAllTransaction', []);

  return (
    <View style={{padding: 16}}>
      <FlatList
        data={daftarProduct}
        renderItem={item =>
          renderItemDaftarProduct(item, navigation)
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
          Confirm
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Transaction;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 50,
  },
});
