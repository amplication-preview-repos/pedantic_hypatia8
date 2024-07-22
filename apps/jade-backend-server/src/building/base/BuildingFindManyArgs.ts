/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BuildingWhereInput } from "./BuildingWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BuildingOrderByInput } from "./BuildingOrderByInput";

@ArgsType()
class BuildingFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BuildingWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BuildingWhereInput, { nullable: true })
  @Type(() => BuildingWhereInput)
  where?: BuildingWhereInput;

  @ApiProperty({
    required: false,
    type: [BuildingOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BuildingOrderByInput], { nullable: true })
  @Type(() => BuildingOrderByInput)
  orderBy?: Array<BuildingOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BuildingFindManyArgs as BuildingFindManyArgs };