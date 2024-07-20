import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { ResidentTitle } from "../resident/ResidentTitle";

export const PaymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
