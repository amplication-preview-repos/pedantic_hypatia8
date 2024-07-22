import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BuildingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Buildings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="StreetAddress1" source="streetAddress1" />
        <TextField label="StreetAddress2" source="streetAddress2" />
        <TextField label="PostalCode" source="postalCode" />
        <TextField label="CountryCode" source="countryCode" />
        <TextField label="Phone" source="phone" />
      </Datagrid>
    </List>
  );
};
