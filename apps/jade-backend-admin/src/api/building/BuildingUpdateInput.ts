import { UnitUpdateManyWithoutBuildingsInput } from "./UnitUpdateManyWithoutBuildingsInput";

export type BuildingUpdateInput = {
  name?: string | null;
  streetAddress1?: string;
  streetAddress2?: string | null;
  postalCode?: string;
  countryCode?: "usa";
  units?: UnitUpdateManyWithoutBuildingsInput;
  phone?: string | null;
};
