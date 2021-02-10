import Axios from "axios";

const url = `${process.env.BASE_API_URL}/properties`;

export const getPropertyDetails = (id) =>
 Axios.get(`${url}/${id}`).then((response) =>{
     return response.data;
 });

 const equipamentUrl = `${process.env.BASE_API_URL}/equipments`;

 export const getequipmentList = () =>
 Axios.get(equipamentUrl).then((response) =>{
     return response.data;
 })
