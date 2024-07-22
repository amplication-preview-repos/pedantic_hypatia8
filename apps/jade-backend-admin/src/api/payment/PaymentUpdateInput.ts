import { UserUpdateManyWithoutPaymentsInput } from "./UserUpdateManyWithoutPaymentsInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  paymentDate?: Date | null;
  stripePaymentId?: string | null;
  users?: UserUpdateManyWithoutPaymentsInput;
};
