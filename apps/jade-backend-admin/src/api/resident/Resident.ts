import { Unit } from "../unit/Unit";
import { Payment } from "../payment/Payment";

export type Resident = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phoneNumber: string | null;
  unit?: Unit | null;
  payments?: Array<Payment>;
};
