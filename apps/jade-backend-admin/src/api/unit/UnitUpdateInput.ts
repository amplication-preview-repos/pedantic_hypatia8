import { ResidentUpdateManyWithoutUnitsInput } from "./ResidentUpdateManyWithoutUnitsInput";
import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";
import { Decimal } from "decimal.js";

export type UnitUpdateInput = {
  unitNumber?: string | null;
  residents?: ResidentUpdateManyWithoutUnitsInput;
  building?: BuildingWhereUniqueInput | null;
  dueAmount?: Decimal;
};
