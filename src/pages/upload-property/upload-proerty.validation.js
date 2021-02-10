import { Validators, createFormValidation } from '@lemoncode/fonk';
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';
import { minNumber } from '@lemoncode/fonk-min-number-validator';
 
const validatorSchema = {
  field: {
    title: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    notes: [
      {
        validator: Validators.requiered,
        message: 'Campo requerido',
      },
    ],
    email: [
      {
        validator: Validators.email,
        messge: 'El email introducido no es válido',
      },
      {
        validator: Validators.requiered,
        message: 'Campo requerido',
      },
    ],
    phone: [
      {
        validator: Validators.requiered,
        message: 'Campo requerido',
      },
      {
        validator: positiveNumber.validator,
        message: 'Tiene que ser un número',
      },
      {
        validator: minNumber.validator,
        customArgs: { minValue: 9, inclusive: true },
        message: 'No llega a la longitud establecida',
      },
    ],
    price: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: positiveNumber.validator,
        message: 'El importe introducido, no es correcto',
      },
    ],
    address: [
      {
        validator: Validators.requiered,
        message: 'Campo requerido',
      },
    ],
    city: [
      {
        validator: Validators.requiered,
        message: 'Caampo requerido',
      },
    ],
    squareMeter: [
      {
        validator: Validators.requiered,
        message: 'Campo requerido',
      },
      {
        validator: positiveNumber.validator,
        message: 'tiene que ser un número',
      },
    ],
    bathrooms: [
      {
        validator: Validators.requiered,
        message: 'Campo requerido',
      },
      {
        validator: positiveNumber.validator,
        message: 'Tiene que ser un número',
      },
    ],
    rooms: [
      {
        validator: Validators.requiered,
        message: 'Campo requerido',
      },
      {
        validator: positiveNumber.validator,
        message: 'Tiene que introducir un número',
      },
    ],
    locationUrl:[
        {
            validator: Validators.requiered,
            message: "Campo requerido",
        },
    ],
  },
};

export const formValidation = createFormValidation(validatorSchema);
