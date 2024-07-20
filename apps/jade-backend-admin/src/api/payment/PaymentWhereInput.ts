import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type PaymentWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  paymentDate?: DateTimeNullableFilter;
  stripePaymentId?: StringNullableFilter;
  users?: UserListRelationFilter;
};
