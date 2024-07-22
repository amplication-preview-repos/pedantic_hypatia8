import { InputJsonValue } from "../../types";
import { UnitUpdateManyWithoutUsersInput } from "./UnitUpdateManyWithoutUsersInput";
import { PaymentUpdateManyWithoutUsersInput } from "./PaymentUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  units?: UnitUpdateManyWithoutUsersInput;
  payments?: PaymentUpdateManyWithoutUsersInput;
  phoneNumber?: string | null;
};
