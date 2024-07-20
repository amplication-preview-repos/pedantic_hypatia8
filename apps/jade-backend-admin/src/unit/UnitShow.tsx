import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { UNIT_TITLE_FIELD } from "./UnitTitle";
import { BUILDING_TITLE_FIELD } from "../building/BuildingTitle";

export const UnitShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="UnitNumber" source="unitNumber" />
        <ReferenceField
          label="Building"
          source="building.id"
          reference="Building"
        >
          <TextField source={BUILDING_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Due Amount" source="dueAmount" />
        <ReferenceManyField
          reference="Resident"
          target="unitId"
          label="Residents"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="FirstName" source="firstName" />
            <TextField label="LastName" source="lastName" />
            <TextField label="Email" source="email" />
            <TextField label="PhoneNumber" source="phoneNumber" />
            <ReferenceField label="Unit" source="unit.id" reference="Unit">
              <TextField source={UNIT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
