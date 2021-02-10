import {Validators, createFormValidation } from "@lemoncode/fonk";

const validationSchema = {
    field:{
        email:[
            {
                validator: Validators.email,
                message: "El email introducido, no es válido",
            },
            {
                validator: Validators.required,
                message: "Campo requerido",
            },
        ],
        message:[
            {
                validator: Validators.required,
                message: "Campo requerido"
            },
        ],
    },
};

export const formValidation = createFormValidation(validationSchema);