import { Resident } from "../resident/Resident";

export type Payment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  paymentDate: Date | null;
  resident?: Resident | null;
  stripePaymentId: string | null;
};
