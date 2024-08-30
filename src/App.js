import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import { ApolloClient, InMemoryCache, ApolloProvider,createHttpLink } from '@apollo/client';
import FlashMessage from 'react-native-flash-message';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink, Observable } from 'apollo-link';
import StorageService from './services/Storage.service';
import { MenuProvider } from 'react-native-popup-menu';
import constants from './constants';
import { gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const { BASE_URL } = constants;

const createLink = () => {
  const gqlLink = new HttpLink({
    uri: `http://192.168.1.32:3002/graphql`,
  });

  const errorLink = onError(
    ({ graphQLErrors, networkError, operation, forward }) => {
      console.log('graphQLErrors', graphQLErrors);
      return null;
    },
  );

  const authMiddleware = new ApolloLink(
    (operation, forward) =>
      new Observable(observer => {
        StorageService.getToken().then(token => {
          if (token) {
            operation.setContext({
              headers: {
                authorization: token,
              },
            });
          }

          return forward(operation).subscribe(observer);
        });
      }),
  );

  return ApolloLink.from([errorLink, authMiddleware, gqlLink]); // httpLink for gql should be last
};

function App() {
  const link = createLink();
  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'network-only',
        errorPolicy: 'ignore'

      },
    },
  });

  return (
    <>
      <ApolloProvider client={client}>
        <MenuProvider>
          <NavigationContainer>
            <Router />
          </NavigationContainer>
        </MenuProvider>
      </ApolloProvider>
      <FlashMessage position="top" />
    </>
  );
}

export default App;
