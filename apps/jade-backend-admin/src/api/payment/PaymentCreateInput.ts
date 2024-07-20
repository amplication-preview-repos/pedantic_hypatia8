import { UserCreateNestedManyWithoutPaymentsInput } from "./UserCreateNestedManyWithoutPaymentsInput";

export type PaymentCreateInput = {
  amount?: number | null;
  paymentDate?: Date | null;
  stripePaymentId?: string | null;
  users?: UserCreateNestedManyWithoutPaymentsInput;
};
