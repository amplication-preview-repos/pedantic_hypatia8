import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BuildingTitle } from "../building/BuildingTitle";
import { UserTitle } from "../user/UserTitle";

export const UnitEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="UnitNumber" source="unitNumber" />
        <ReferenceInput
          source="building.id"
          reference="Building"
          label="Building"
        >
          <SelectInput optionText={BuildingTitle} />
        </ReferenceInput>
        <NumberInput label="Due Amount" source="dueAmount" />
        <ReferenceArrayInput
          source="users"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
