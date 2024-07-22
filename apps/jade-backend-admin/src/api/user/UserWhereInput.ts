import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UnitListRelationFilter } from "../unit/UnitListRelationFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  units?: UnitListRelationFilter;
  payments?: PaymentListRelationFilter;
  phoneNumber?: StringNullableFilter;
};
