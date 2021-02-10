import {
  mapPropertyListFromApiToVm,
  mapFilterToQueryParams,
} from './property-list.mapper';
import {
  getPropertyList,
  getSaleTypeList,
  getProvincesList,
} from './property-list.api';
import { addPropertyRows, clearPropertyRows, setOptions } from './property-list.helpers'; //añadir/pintar las filas de propiedades
import {
  roomOptions,
  bathroomOptions,
  minPriceOptions,
  maxPriceOptions,
} from './property-list.constants';
import { onUpdateField, onSubmitForm } from '../../common/helpers';
/* getPropertyList().then(propertyList =>{
    const vmPropertyList = mapPropertyListFromApiToVm(propertyList);
    addPropertyRows(vmPropertyList);
}); con solo una promesa */
Promise.all([
  getPropertyList(),
  getSaleTypeList(),
  getProvincesList(),])//metodo de promesas para poder hacer varias peticiones juntas
.then(([propertyList, saleTypeList, provinceList]) => {

    loadPropertyList(propertyList);
    setOptions(saleTypeList, 'select-sale-type', '¿Qué venta es?');
    setOptions(provinceList, 'select-province', '¿Dónde?');
    setOptions(roomOptions, 'select-room', '¿Habitaciones?');
    setOptions(bathroomOptions, "select-bathroom", '¿Baños?');
    setOptions(minPriceOptions, 'select-min-price', '¿Precio minimo?');
    setOptions(maxPriceOptions, 'select-max-price', '¿Precio máximo?');
});
    //.then(resultList =>{
  //const [ propertyList, saleTypeList, provincesList] = resultList; //destructuring

  /* const propertyList = resultList[0];
    const saleTypeList = resultList[1];
    const provincesList = resultList[2]; */

const loadPropertyList = (propertyList) => {
  const vmPropertyList = mapPropertyListFromApiToVm(propertyList);
  addPropertyRows(vmPropertyList);
};

let filter = {
  saleTypeId: "",
  provinceId: "",
  minRooms:"",   //parte de modelar,crear un modelo de lo que quieres representar en la vista
  minBathroom:"",
  minPrice: "",
  maxPrice:"",
};

onUpdateField('select-sale-type', (event) => {
  const value = event.target.value;
  filter = {
    ...filter,
    saleTypeId: value,
  };
});
onUpdateField('select-province',(event) =>{
  const value = event.target.value;
  filter = {
    ...filter,
    provinceId: value,
  };
});
onUpdateField('select-room', (event) => {
  const value = event.target.value;
    filter = {
      ...filter,
      minRooms: value,
    };
});
onUpdateField('select-bathroom',(event) =>{
  const value = event.target.value;
  filter = {
    ...filter,
    minBathroom: value,
  };
});
onUpdateField('select-min-price',(event) =>{
  const value = event.target.value;
  filter = {
    ...filter,
    minPrice: value,
  };
});
onUpdateField('select-max-price',(event) =>{
  const value = event.target.value;
  filter = {
    ...filter,
    maxPrice: value,
  };
});
onSubmitForm('search-button',() =>{
  //http://localhost:3000/api/properties url actual
  //http://localhost:3000/api/properties?rooms_gte =${filter.minRooms} para filtrar
  const queryParams = mapFilterToQueryParams(filter);
  //queryParams de quedaria de esta forma con los valores que hemos recogido
  clearPropertyRows(); //para limpiar lo que hay, y no se repitan las propiedades
  getPropertyList(queryParams).then(propertyList =>{
    //volvemos a pedir las lista de propiedades con getPropertyList
    loadPropertyList(propertyList);
    //añadiriamos las nuevas propiedades ya filtradas
  });
});