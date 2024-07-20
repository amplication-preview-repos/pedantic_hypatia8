import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ResidentWhereUniqueInput } from "../resident/ResidentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PaymentWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  paymentDate?: DateTimeNullableFilter;
  resident?: ResidentWhereUniqueInput;
  stripePaymentId?: StringNullableFilter;
};
