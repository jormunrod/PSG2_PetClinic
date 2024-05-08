import {formValidators} from "../../../../validators/formValidators";

export const bookingEditFormInput=[
    {
        tag:"startDate",
        name: "startDate",
        type:"datetime-local",
        defaultValue: "",
        isRequired:true,
        validators:[formValidators.notEmptyValidator],
    },
    {
        tag:"endDate",
        name: "endDate",
        type:"datetime-local",
        defaultValue: "",
        isRequired:true,
        validators:[formValidators.notEmptyValidator],
    },
    {
        tag: "owner",
        name: "owner",
        type: "select",
        values: ["None"],
        defaultValue: "",
        isRequired: true,
        validators: [formValidators.notEmptyValidator, formValidators.notNoneTypeValidator],
    },
    {
        tag: "pet",
        name: "pet",
        type: "select",
        values: ["None"],
        defaultValue: "",
        isRequired: true,
        validators: [formValidators.notEmptyValidator, formValidators.notNoneTypeValidator],
    },
    {
        tag: "room",
        name: "room",
        type: "select",
        values: ["None"],
        defaultValue: "",
        isRequired: true,
        validators: [formValidators.notEmptyValidator, formValidators.notNoneTypeValidator],
    },
]
