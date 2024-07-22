import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";
import { Decimal } from "decimal.js";
import { UserUpdateManyWithoutUnitsInput } from "./UserUpdateManyWithoutUnitsInput";

export type UnitUpdateInput = {
  unitNumber?: string | null;
  building?: BuildingWhereUniqueInput | null;
  dueAmount?: Decimal;
  users?: UserUpdateManyWithoutUnitsInput;
};
