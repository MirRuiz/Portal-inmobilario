import Axios from "axios";

const saleTypeUrl = `${process.env.BASE_API_URL}/saleTypes`;

 export const getSaleType = () =>
 Axios.get(saleTypeUrl).then((response) =>{
     return response.data;
 });

const equipmentUrl = `${process.env.BASE_API_URL}/equipments`;

 export const getEquipment =()=>
 Axios.get(equipmentUrl).then((response) =>{
     return response.data;
 });

const provinceUrl = `${process.env.BASE_API_URL}/provinces`;

export const getProvinces = () =>
Axios.get(provinceUrl).then((response) =>{
  return  response.data;
});

const propertyUrl = `${process.env.BASE_API_URL}/properties`;

export const insertNewProperty = newProperty =>
Axios.post(propertyUrl, newProperty).then((response) =>{
  return response.data;
})




 
 