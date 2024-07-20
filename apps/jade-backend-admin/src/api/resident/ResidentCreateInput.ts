import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";
import { PaymentCreateNestedManyWithoutResidentsInput } from "./PaymentCreateNestedManyWithoutResidentsInput";

export type ResidentCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  unit?: UnitWhereUniqueInput | null;
  payments?: PaymentCreateNestedManyWithoutResidentsInput;
};
