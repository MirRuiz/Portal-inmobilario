import { onSetError, onUpdateField, onSubmitForm } from '../../common/helpers';
import { formValidation } from './upload-property.validation';
import { getSaleType, getEquipment, getProvinces } from './upload-property.api';
import {
  onAddFeature,
  onRemoveFeature,
  setCheckboxList,
  setOptionList,
  formatDeleteFeatureButtonId,
} from './upload-property.helpers';

let newProperty = {
  title: '',
  notes: '',
  email: '',
  phone: '',
  price: '',
  saleTypeId: [],
  address: '',
  city: '',
  ProvinceId: '',
  squareMeter: '',
  bathrooms: '',
  rooms: '',
  locationUrl: '',
  mainFeatures: [],
  equipmentId: [],
  images: [],
};
Promise.all([getSaleType(), getEquipment(), getProvinces()]).then(
  ([tipeSaleProperty, equipmentList, provinceList]) => {
    setCheckboxList(tipeSaleProperty, 'saleTypes');
    setCheckboxList(equipmentList, 'equipments');
    setOptionList(provinceList, 'province');
  }
);
let arrayEquipment = [];
onUpdateField('equipments', (event) => {
  const value = event.target.value;
  if (arrayEquipment.includes(value)) {
    const elementToDelete = arrayEquipment.indexOf(value);
    arrayEquipment.splice(elementToDelete, 1);
  } else {
    arrayEquipment.push(value);
  }
  newProperty = {
    ...newProperty,
    equipmentId: arrayEquipment,
  };
});
 let arraySaleType = [];
 onUpdateField("saleTypes",(event) =>{
   const value = event.target.value;
   if(arraySaleType.includes(value)){
     const elementToDelete = arraySaleType.indexOf(value);
     arraySaleType.splice(elementToDelete, 1)
   }else{
     arraySaleType.push(value)
   };
   newProperty = {
     ...newProperty,
     saleTypeId: arraySaleType,
   };
   formValidation.validateField('saleTypes', newProperty.saleTypeId).then((result) =>{
     onSetError("saleTypes", result)
   });
 });
// let arrayFeatures = [];
onSubmitForm("insert-feature-button",() =>{
  const feature = document.getElementById('newFeature').value;
  if(feature){
    newProperty = {
      ...newProperty,
      mainFeatures: [...newProperty.mainFeatures, feature],
    };
    onAddFeature(feature)
  }
  // onRemoveFeature(feature)
  formatDeleteFeatureButtonId(feature)
});


const getIdfromForm = (htmlId) => {
  onUpdateField(htmlId, (event) => {
    const value = event.target.value;
    newProperty = {
      ...newProperty,
      [htmlId]: value,
    };
    formValidation.validateField(htmlId, newProperty[htmlId]).then((result) => {
      onSetError(htmlId, result);
    });
    return newProperty;
  });
};
getIdfromForm('title');
getIdfromForm('notes');
getIdfromForm('email');
getIdfromForm('phone');
getIdfromForm('price');
getIdfromForm('address');
getIdfromForm('city');
getIdfromForm('province');
getIdfromForm('squareMeter');
getIdfromForm('bathrooms');
getIdfromForm('rooms');
getIdfromForm('locationUrl');
getIdfromForm('province');


onSubmitForm('save-button', () => {
  console.log(newProperty);
});
