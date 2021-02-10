import { setPropertyValues } from "./property-detail.helpers";
import { history } from "../../core/router";
import {getPropertyDetails, getequipmentList,insertContact } from "./property-detail.api";
import { mapPropertyDetailFromApiToVm, mapContactFromVmToApi } from './property-detail.mapper';
import {
  onSetError,
  onSubmitForm,
  onUpdateField,
  onSetFormErrors,
} from '../../common/helpers';
import { formValidation } from "./property-detail.validatoin";


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

let contact = {
  email: '',
  message: '',
};
onUpdateField("email",(event) =>{
  const value = event.target.value;
    contact ={
      ...contact,
      email: value,
    };
    formValidation.validateField("email",contact.email)
    .then((result) =>{
      onSetError("email", result)
    })
});

onUpdateField("message",(event) =>{
  const value = event.target.value;
  contact ={
    ...contact,
    message:value,
  };
  formValidation.validateField("message", contact.message)
  .then((result) =>{
    onSetError("message", result)
  })
});

onSubmitForm('contact-button',() =>{
  formValidation.validateForm(contact).then((result) =>{
    onSetFormErrors(result);
    const contactVmApi = mapContactFromVmToApi(contact);

    if(result.succeeded){
      insertContact(contactVmApi).then(() =>{
        history.back()
      })
    };


  })
});