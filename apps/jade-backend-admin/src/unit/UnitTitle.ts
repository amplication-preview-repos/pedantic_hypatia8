import { Unit as TUnit } from "../api/unit/Unit";

export const UNIT_TITLE_FIELD = "unitNumber";

export const UnitTitle = (record: TUnit): string => {
  return record.unitNumber?.toString() || String(record.id);
};
