import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type ResidentWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  email?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  unit?: UnitWhereUniqueInput;
  payments?: PaymentListRelationFilter;
};
