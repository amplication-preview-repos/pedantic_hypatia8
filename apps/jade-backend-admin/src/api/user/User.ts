import { JsonValue } from "type-fest";
import { Unit } from "../unit/Unit";
import { Payment } from "../payment/Payment";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  units?: Array<Unit>;
  payments?: Array<Payment>;
  phoneNumber: string | null;
};
