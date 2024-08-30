import axios from 'axios';
import queryString from 'query-string';

const getProvince = () => {
  return axios
    .get('https://api.rajaongkir.com/starter/province', {
      headers: {key: '5bc018ca42aa8fce43bf7e7dcca12be9'},
    })
    .then(function (response) {
      return response.data.rajaongkir.results;
    })
    .catch(function (error) {
      return error;
    });
};

const getCity = province => {
  return axios
    .get('https://api.rajaongkir.com/starter/city', {
      params: {
        province: province,
      },
      headers: {key: '5bc018ca42aa8fce43bf7e7dcca12be9'},
    })
    .then(function (response) {
      return response.data.rajaongkir.results;
    })
    .catch(function (error) {
      return error;
    });
};

const getCost = (origin, destination, weight, courier) => {
  const data = {
    origin: origin,
    destination: destination,
    weight: weight,
    courier: courier,
  };
  const dataString = queryString.stringify(data);

  return axios({
    method: 'post',
    url: 'https://api.rajaongkir.com/starter/cost',
    headers: {
      key: '5bc018ca42aa8fce43bf7e7dcca12be9',
      'content-type': 'application/x-www-form-urlencoded',
    },
    data: dataString,
  })
    .then(function (response) {
      return response.data.rajaongkir.results[0].costs;
    })
    .catch(function (error) {
      return error;
    });
};

export default {
  getProvince,
  getCity,
  getCost,
};
