import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { RESIDENT_TITLE_FIELD } from "../resident/ResidentTitle";

export const PaymentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Payments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Amount" source="amount" />
        <TextField label="PaymentDate" source="paymentDate" />
        <ReferenceField
          label="Resident"
          source="resident.id"
          reference="Resident"
        >
          <TextField source={RESIDENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Stripe Payment ID" source="stripePaymentId" />
      </Datagrid>
    </List>
  );
};
