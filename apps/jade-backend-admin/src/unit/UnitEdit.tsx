import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { ResidentTitle } from "../resident/ResidentTitle";
import { BuildingTitle } from "../building/BuildingTitle";

export const UnitEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="UnitNumber" source="unitNumber" />
        <ReferenceArrayInput
          source="residents"
          reference="Resident"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ResidentTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="building.id"
          reference="Building"
          label="Building"
        >
          <SelectInput optionText={BuildingTitle} />
        </ReferenceInput>
        <NumberInput label="Due Amount" source="dueAmount" />
      </SimpleForm>
    </Edit>
  );
};
