import { formValidators } from "../../../../validators/formValidators";
import moment from 'moment';

export const petEditFormInputs = [
  {
    tag: "Name",
    name: "name",
    type: "text",
    defaultValue: "",
    isRequired: true,
    validators: [formValidators.notEmptyValidator],
  },
  {
    tag: "Birth Date",
    name: "birthDate",
    type: "date",
    defaultValue: moment().format('YYYY-MM-DD'),
    isRequired: true,
    validators: [formValidators.notEmptyValidator],
  },
  {
    tag: "Type",
    name: "type",
    type: "select",
    values: ["None"],
    defaultValue: "",
    isRequired: true,
    validators: [formValidators.notEmptyValidator, formValidators.notNoneTypeValidator],
  },
  {
    tag: "Is available for adoption?",
    name: "isAvailableForAdoption",
    type: "select",
    values: ["No", "Yes"],
    defaultValue: "",
    isRequired: true,
    validators: [formValidators.notEmptyValidator, formValidators.notNoneTypeValidator],
  }
];
