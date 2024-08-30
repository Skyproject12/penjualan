import {gql} from '@apollo/client';

const loginMember = gql`
  mutation loginMember($user: String, $password: String) {
    loginMember(user: $user, password: $password) {
      isSuccess
      accessToken
    }
  }
`;

const transactionProduct = gql`
  mutation transactionProduct($productCode: String) {
    transactionProduct(productCode: $productCode) {
      isSuccess
    }
  }
`;

export default {
  loginMember,
  transactionProduct,
};
