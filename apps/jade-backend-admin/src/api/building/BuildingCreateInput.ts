import { UnitCreateNestedManyWithoutBuildingsInput } from "./UnitCreateNestedManyWithoutBuildingsInput";

export type BuildingCreateInput = {
  name?: string | null;
  streetAddress1: string;
  streetAddress2?: string | null;
  postalCode: string;
  countryCode: "usa";
  units?: UnitCreateNestedManyWithoutBuildingsInput;
  phone?: string | null;
};
