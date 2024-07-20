import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { RESIDENT_TITLE_FIELD } from "../resident/ResidentTitle";

export const PaymentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
