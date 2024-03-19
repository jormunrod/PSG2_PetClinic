import {formValidators} from "../../../../validators/formValidators";

export const consultationEditFormInputs = [
    {
        tag: "Tittle",
        name: "tittle",
        type: "text",
        defaultValue: "",
        isRequired: true,
        validators: [formValidators.notEmptyValidator],
      },
];