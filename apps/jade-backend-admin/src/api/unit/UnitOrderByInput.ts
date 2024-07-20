import { SortOrder } from "../../util/SortOrder";

export type UnitOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  unitNumber?: SortOrder;
  buildingId?: SortOrder;
  dueAmount?: SortOrder;
};
