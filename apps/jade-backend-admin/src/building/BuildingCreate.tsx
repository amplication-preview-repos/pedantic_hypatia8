import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UnitTitle } from "../unit/UnitTitle";

export const BuildingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="StreetAddress1" source="streetAddress1" />
        <TextInput label="StreetAddress2" source="streetAddress2" />
        <TextInput label="PostalCode" source="postalCode" />
        <SelectInput
          source="countryCode"
          label="CountryCode"
          choices={[{ label: "United States", value: "usa" }]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="units"
          reference="Unit"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UnitTitle} />
        </ReferenceArrayInput>
        <TextInput label="Phone" source="phone" />
      </SimpleForm>
    </Create>
  );
};
