import { Unit } from "../unit/Unit";

export type Building = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  streetAddress1: string;
  streetAddress2: string | null;
  postalCode: string;
  countryCode?: "usa" | "canada";
  units?: Array<Unit>;
  phone: string | null;
};
