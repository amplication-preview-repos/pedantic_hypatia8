import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { ResidentTitle } from "../resident/ResidentTitle";

export const PaymentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <DateTimeInput label="PaymentDate" source="paymentDate" />
        <ReferenceInput
          source="resident.id"
          reference="Resident"
          label="Resident"
        >
          <SelectInput optionText={ResidentTitle} />
        </ReferenceInput>
        <TextInput label="Stripe Payment ID" source="stripePaymentId" />
      </SimpleForm>
    </Create>
  );
};
