import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../pages/Login';
import {ProductList} from '../pages/ProductList';
import {ProductDetail} from '../pages/ProductDetail';
import {Transaction} from '../pages/Transaction';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Transaction"
        component={Transaction}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
