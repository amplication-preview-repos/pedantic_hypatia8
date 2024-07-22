import { UnitUpdateManyWithoutBuildingsInput } from "./UnitUpdateManyWithoutBuildingsInput";

export type BuildingUpdateInput = {
  name?: string | null;
  streetAddress1?: string;
  streetAddress2?: string | null;
  postalCode?: string;
  countryCode?: "usa" | "canada";
  units?: UnitUpdateManyWithoutBuildingsInput;
  phone?: string | null;
};
