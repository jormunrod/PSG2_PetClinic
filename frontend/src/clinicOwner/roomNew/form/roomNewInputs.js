import { formValidators } from "../../../validators/formValidators";

export const roomNewInputs = [
    {
        tag: "Name",
        name: "name",
        type: "text",
        defaultValue: "",
        isRequired: true,
        validators: [formValidators.notEmptyValidator],
    },
    {
        tag: "Allowed Pet Type",
        name: "allowedPetType",
        type: "select",
        values: ["DOG", "BASIC", "GOLD", "PLATINUM"],
        defaultValue: "DOG",
        isRequired: true,
        validators: [formValidators.notEmptyValidator, formValidators.notNoneTypeValidator],
    },
    {
        tag: "Clinic Id",
        name: "clinicId",
        type: "number",
        defaultValue: "",
        isRequired: true,
    },
    {
        tag: "Size",
        name: "size",
        type: "integer",
        defaultValue: "1",
        isRequired: true,
    },
];