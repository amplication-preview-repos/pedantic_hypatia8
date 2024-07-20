import { User } from "../user/User";

export type Payment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  paymentDate: Date | null;
  stripePaymentId: string | null;
  users?: Array<User>;
};
