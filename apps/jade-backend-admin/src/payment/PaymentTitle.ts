import { Payment as TPayment } from "../api/payment/Payment";

export const PAYMENT_TITLE_FIELD = "stripePaymentId";

export const PaymentTitle = (record: TPayment): string => {
  return record.stripePaymentId?.toString() || String(record.id);
};
