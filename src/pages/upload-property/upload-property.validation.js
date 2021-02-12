import { Validators, createFormValidation } from '@lemoncode/fonk';
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';
import { minNumber } from '@lemoncode/fonk-min-number-validator';
 import { isUrl } from '@lemoncode/fonk-is-url-validator';
const validationSchema = {
  field: {
    title: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    notes: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    email: [
      {
        validator: Validators.email,
        messge: 'El email introducido no es válido',
      },
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    phone: [
      {
        validator: Validators.required,
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
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    city: [
      {
        validator: Validators.required,
        message: 'Caampo requerido',
      },
    ],
    squareMeter: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: positiveNumber.validator,
        message: 'tiene que ser un número',
      },
    ],
    bathrooms: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: positiveNumber.validator,
        message: 'Tiene que ser un número',
      },
    ],
    rooms: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: positiveNumber.validator,
        message: 'Tiene que introducir un número',
      },
    ],
    locationUrl: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: isUrl.validator,
        message: "No es una url válida"
      },
    ],
    saleTypeId: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    ProvinceId: Validators.required,
    message: 'Campo requerido',
  },
};

export const formValidation = createFormValidation(validationSchema);
