import { ResidentCreateNestedManyWithoutUnitsInput } from "./ResidentCreateNestedManyWithoutUnitsInput";
import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";
import { Decimal } from "decimal.js";

export type UnitCreateInput = {
  unitNumber?: string | null;
  residents?: ResidentCreateNestedManyWithoutUnitsInput;
  building?: BuildingWhereUniqueInput | null;
  dueAmount: Decimal;
};
