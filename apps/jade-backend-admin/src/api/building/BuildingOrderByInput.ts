import { SortOrder } from "../../util/SortOrder";

export type BuildingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  streetAddress1?: SortOrder;
  streetAddress2?: SortOrder;
  postalCode?: SortOrder;
  countryCode?: SortOrder;
  phone?: SortOrder;
};
