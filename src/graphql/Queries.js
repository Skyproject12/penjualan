import {gql} from '@apollo/client';

const getAllProduct = gql`
  query getAllProduct {
    getAllProduct {
      productCode
      productName
      price
      currency
      discount
      dimention
      unit
    }
  }
`;

const getAllTransaction = gql`
  query getAllTransaction {
    getAllTransaction {
      documentNumber
      productCode
      price
      quantity
      unit
      subTotal
      currency
      documentCode
      user
    }
  }
`;

export default {
  getAllProduct,
  getAllTransaction,
};
