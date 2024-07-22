import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BUILDING_TITLE_FIELD } from "./BuildingTitle";

export const BuildingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="StreetAddress1" source="streetAddress1" />
        <TextField label="StreetAddress2" source="streetAddress2" />
        <TextField label="PostalCode" source="postalCode" />
        <TextField label="CountryCode" source="countryCode" />
        <TextField label="Phone" source="phone" />
        <ReferenceManyField reference="Unit" target="buildingId" label="Units">
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
