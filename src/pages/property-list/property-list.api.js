import Axios from 'axios';
//recuperas las propiedades de la api
const url = `${process.env.BASE_API_URL}/properties`;

export const getPropertyList = (queryParams) =>
  Axios.get(`${url}?${queryParams}`).then((response) => {
    return response.data;
  });//actualizamos estya funcion para que ciontenga o no los valores de queryParams
//cuando concatenamos queryParam usamos ?
const saleTypeUrl = `${process.env.BASE_API_URL}/saleTypes`;

export const getSaleTypeList = () =>
  Axios.get(saleTypeUrl).then((response) => {
    return response.data;
  });

const provincesUrl = `${process.env.BASE_API_URL}/provinces`;

export const getProvincesList = () =>
  Axios.get(provincesUrl).then((response) => {
    return response.data;
  });
