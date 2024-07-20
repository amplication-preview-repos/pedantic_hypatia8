import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";
import { PaymentUpdateManyWithoutResidentsInput } from "./PaymentUpdateManyWithoutResidentsInput";

export type ResidentUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  unit?: UnitWhereUniqueInput | null;
  payments?: PaymentUpdateManyWithoutResidentsInput;
};
