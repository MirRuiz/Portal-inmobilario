import { setPropertyValues } from "./property-detail.helpers";
import { history } from "../../core/router";
import {getPropertyDetails, getequipmentList } from "./property-detail.api";
import { mapPropertyDetailFromApiToVm } from './property-detail.mapper';


/* const params = getParams();
const hasId = 
setPropertyValues = property =>{

} */
let property = {
    id: "",
    mainImages: "",
    title: "",
    city: "",
    price: "",
    rooms:"",
    squareMeter:"",
    bathrooms: "",
    locationUrl:"",
    notes: "",
    equipamentId: "",
    mainFeatures: "",
    images: "",

};
const params = history.getParams();
//promise.all...map...filter
 getPropertyDetails(params.id).then(property =>{
    const vMPropertyDetail =mapPropertyDetailFromApiToVm(property);
    console.log(vMPropertyDetail)
    setPropertyValues(vMPropertyDetail);//array no objeto
});
 

/* Promise.all([                
  getPropertyDetails(params.id),
  getequipmentList(),
]).then(([propertyDetails, equipmentList]) => {
    const vMPropertyList = mapPropertyDetailFromApiToVm(
      propertyDetails
    );
    setPropertyValues(vMPropertyList);

}); */