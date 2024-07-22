import { InputJsonValue } from "../../types";
import { UnitCreateNestedManyWithoutUsersInput } from "./UnitCreateNestedManyWithoutUsersInput";
import { PaymentCreateNestedManyWithoutUsersInput } from "./PaymentCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  units?: UnitCreateNestedManyWithoutUsersInput;
  payments?: PaymentCreateNestedManyWithoutUsersInput;
  phoneNumber?: string | null;
};
