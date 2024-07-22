import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";
import { DecimalFilter } from "../../util/DecimalFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type UnitWhereInput = {
  id?: StringFilter;
  unitNumber?: StringNullableFilter;
  building?: BuildingWhereUniqueInput;
  dueAmount?: DecimalFilter;
  users?: UserListRelationFilter;
};
