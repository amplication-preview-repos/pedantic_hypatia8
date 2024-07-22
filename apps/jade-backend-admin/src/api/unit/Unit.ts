import { Building } from "../building/Building";
import { Decimal } from "decimal.js";
import { User } from "../user/User";

export type Unit = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  unitNumber: string | null;
  building?: Building | null;
  dueAmount: Decimal;
  users?: Array<User>;
};
