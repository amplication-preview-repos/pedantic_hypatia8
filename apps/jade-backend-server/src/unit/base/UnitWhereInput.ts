/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ResidentListRelationFilter } from "../../resident/base/ResidentListRelationFilter";
import { BuildingWhereUniqueInput } from "../../building/base/BuildingWhereUniqueInput";
import { DecimalFilter } from "../../util/DecimalFilter";

@InputType()
class UnitWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  unitNumber?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ResidentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ResidentListRelationFilter)
  @IsOptional()
  @Field(() => ResidentListRelationFilter, {
    nullable: true,
  })
  residents?: ResidentListRelationFilter;

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
  building?: BuildingWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: DecimalFilter,
  })
  @Type(() => DecimalFilter)
  @IsOptional()
  @Field(() => DecimalFilter, {
    nullable: true,
  })
  dueAmount?: DecimalFilter;
}

export { UnitWhereInput as UnitWhereInput };
