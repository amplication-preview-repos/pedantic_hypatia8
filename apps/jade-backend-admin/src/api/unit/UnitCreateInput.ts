import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";
import { Decimal } from "decimal.js";
import { UserCreateNestedManyWithoutUnitsInput } from "./UserCreateNestedManyWithoutUnitsInput";

export type UnitCreateInput = {
  unitNumber?: string | null;
  building?: BuildingWhereUniqueInput | null;
  dueAmount: Decimal;
  users?: UserCreateNestedManyWithoutUnitsInput;
};
