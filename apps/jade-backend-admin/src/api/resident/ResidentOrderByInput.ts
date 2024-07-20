import { SortOrder } from "../../util/SortOrder";

export type ResidentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  email?: SortOrder;
  phoneNumber?: SortOrder;
  unitId?: SortOrder;
};
