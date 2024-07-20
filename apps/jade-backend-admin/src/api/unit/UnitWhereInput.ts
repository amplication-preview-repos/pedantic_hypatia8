import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ResidentListRelationFilter } from "../resident/ResidentListRelationFilter";
import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";
import { DecimalFilter } from "../../util/DecimalFilter";

export type UnitWhereInput = {
  id?: StringFilter;
  unitNumber?: StringNullableFilter;
  residents?: ResidentListRelationFilter;
  building?: BuildingWhereUniqueInput;
  dueAmount?: DecimalFilter;
};
