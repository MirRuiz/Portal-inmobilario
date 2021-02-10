import {onUpdateField } from "../../common/helpers";
import { formValidation } from "./upload-proerty.validation";



let newProperty = {
  id: '',
  title: '',
  notes: '',
  email: '',
  phone: '',
  price: '',
  saleTypeId:[],
  address: '',
  city: '',
  ProvinceId:"",
  squareMeter: '',
  bathrooms: '',
  rooms: '',
  locationUrl:"",
  mainFeatures:[],
  equipmentId:[],
  images:[],
};

onUpdateField("title",(event) =>{
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        title: value,
    };
});

onUpdateField("notes", (event) =>{
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        notes: value,
    };
});

onUpdateField("email",(event) =>{
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        email: value,
    };
});

onUpdateField("phone",(event) =>{
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        phone: value,
    };
});

onUpdateField("price",(event) =>{
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        price: value,
    }; 
});

onUpdateField('address',(event) =>{
    const value = event.target.value;
    newProperty = {
        newProperty,
        address: value,
    };
});

onUpdateField("city",(event) =>{
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        city: value,
    };
});

onUpdateField("province", (event) =>{
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        province: value,
    };

});

onUpdateField('squareMeter',(event) =>{
    const value = event.target.value;
    newProperty = {
      ...newProperty,
      squareMeter: value,
    };
});

onUpdateField("rooms",(event) =>{
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        rooms: value,
    };
});

onUpdateField("bathrooms",(event) =>{
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        bathrooms: value,
    };
});

onUpdateField("locationUrl",(event) =>{
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        locationUrl: value,
    };
});

