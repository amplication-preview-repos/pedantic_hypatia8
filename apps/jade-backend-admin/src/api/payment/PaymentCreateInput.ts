import { ResidentWhereUniqueInput } from "../resident/ResidentWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  paymentDate?: Date | null;
  resident?: ResidentWhereUniqueInput | null;
  stripePaymentId?: string | null;
};
