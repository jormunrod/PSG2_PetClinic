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
      values: ["DOG", "CAT", "PARROT", "TURTLE", "HAMSTER", "FISH", "OTHER"],
      defaultValue: "DOG",
      isRequired: true,
      validators: [formValidators.notEmptyValidator, formValidators.notNoneTypeValidator],
    },
    {
      tag: "Clinic Id",
      name: "clinicId",
      type: "select",
      values: [],
      defaultValue: "",
      isRequired: true,
    },
    {
      tag: "Size",
      name: "size",
      type: "number",
      defaultValue: "1",
      isRequired: true,
    },
  ];
  