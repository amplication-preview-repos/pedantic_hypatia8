/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsNumber,
  Max,
} from "class-validator";
import { ResidentCreateNestedManyWithoutUnitsInput } from "./ResidentCreateNestedManyWithoutUnitsInput";
import { Type } from "class-transformer";
import { BuildingWhereUniqueInput } from "../../building/base/BuildingWhereUniqueInput";
import { Decimal } from "decimal.js";

@InputType()
class UnitCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  unitNumber?: string | null;

  @ApiProperty({
    required: false,
    type: () => ResidentCreateNestedManyWithoutUnitsInput,
  })
  @ValidateNested()
  @Type(() => ResidentCreateNestedManyWithoutUnitsInput)
  @IsOptional()
  @Field(() => ResidentCreateNestedManyWithoutUnitsInput, {
    nullable: true,
  })
  residents?: ResidentCreateNestedManyWithoutUnitsInput;

  @ApiProperty({
    required: false,
    type: () => BuildingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BuildingWhereUniqueInput)
  @IsOptional()
  @Field(() => BuildingWhereUniqueInput, {
    nullable: true,
  })
  building?: BuildingWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @Field(() => Float)
  dueAmount!: Decimal;
}

export { UnitCreateInput as UnitCreateInput };
