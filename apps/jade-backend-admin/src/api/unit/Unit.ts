import { Resident } from "../resident/Resident";
import { Building } from "../building/Building";
import { Decimal } from "decimal.js";

export type Unit = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  unitNumber: string | null;
  residents?: Array<Resident>;
  building?: Building | null;
  dueAmount: Decimal;
};
