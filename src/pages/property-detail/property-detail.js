import { setPropertyValues } from "./property-detail.helpers";
import { history } from "../../core/router";
import {getPropertyDetails, getequipmentList } from "./property-detail.api";
import { mapPropertyDetailFromApiToVm } from './property-detail.mapper';

/* let property = {
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

}; */
const params = history.getParams();
 
Promise.all([                
  getPropertyDetails(params.id),
  getequipmentList(),
]).then(([propertyDetails, equipmentList]) => {
    const vMPropertyList = mapPropertyDetailFromApiToVm(
      propertyDetails,
      equipmentList
    );
    setPropertyValues(vMPropertyList);

});

let contac = {
  
}