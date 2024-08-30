/* eslint-disable no-lone-blocks */
import {Text, View, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import {Input, Button, Link, Gap, Loading} from '../../components';
import {showToast, Style} from '../../utils';
import {Formik} from 'formik';
import ValidateFormik from './Login.config';
import {mutations} from '../../graphql';
import {useMutation} from '@apollo/client';
import StorageService from '../../services/Storage.service';
import styles from './Login.style';
import {get} from 'lodash';

const RenderInputForm = (navigation, loginMember) => {
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      isInitialValid={false}
      onSubmit={async (values, {resetForm}) => {
        const {data} = await loginMember({
          variables: {
            user: values.username.trim(),
            password: values.password.trim(),
          },
        });
        const login = get(data, 'loginMember', {});
        if (login.isSuccess) {
          resetForm();
        }
        return login;
      }}
      validationSchema={ValidateFormik}>
      {formikProps => {
        const {
          setFieldValue,
          setFieldTouched,
          values,
          touched,
          errors,
          handleSubmit,
          isValid,
          isSubmitting,
        } = formikProps;

        return (
          <View>
            <Input
              label="Username"
              placeholder="masukkan Username"
              onChange={setFieldValue}
              onBlur={setFieldTouched}
              name="username"
              value={values.username}
              touched={touched.username}
              errors={errors.username}
            />
            <Gap height={12} />
            <Input
              placeholder="masukkan password"
              label="Password"
              onChange={setFieldValue}
              onBlur={setFieldTouched}
              name="password"
              secureTextEntry
              value={values.password}
              touched={touched.password}
              errors={errors.password}
            />
            <Gap height={16} />
            <Button
              text="Login"
              disabled={!isValid || isSubmitting}
              onPress={handleSubmit}
            />
          </View>
        );
      }}
    </Formik>
  );
};

function Login({navigation}) {
  const [loginMember, {data, loading, error, reset}] = useMutation(
    mutations.loginMember,
  );

  if (error) {
    const graphql = get(error, 'graphQLErrors', []);
    if (graphql.length !== 0) {
      {
        error.graphQLErrors.map(({message}, i) => {
          if (message) {
            showToast(message);
          } else {
            showToast('Terjadi Suatu Kesalahan, Mohon ulangi kembali');
          }
        });
      }
    } else {
      showToast('Terjadi Suatu Kesalahan, Mohon ulangi kembali');
    }
  }

  if (data && !error) {
    const {
      loginMember: {accessToken},
    } = data;

    StorageService.saveToken({token: accessToken});
    navigation.navigate('ProductList');
    reset();
  }

  return (
    <>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerImage}>
            <Text style={{fontSize: 40}}>LOGIN</Text>
          </View>
          <Gap height={12} />
          {RenderInputForm(navigation, loginMember)}
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
}

export default Login;
