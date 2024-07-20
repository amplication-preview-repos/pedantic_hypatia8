import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UnitListRelationFilter } from "../unit/UnitListRelationFilter";

export type BuildingWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  streetAddress1?: StringFilter;
  postalCode?: StringFilter;
  countryCode?: "usa";
  units?: UnitListRelationFilter;
  phone?: StringNullableFilter;
};
