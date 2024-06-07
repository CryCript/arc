/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsOptional,
  ValidateNested,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { SbEmployee } from "../../sbEmployee/base/SbEmployee";
import { EnumSbOrderShift } from "./EnumSbOrderShift";

@ObjectType()
class SbOrder {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date!: Date | null;

  @ApiProperty({
    required: false,
    type: () => SbEmployee,
  })
  @ValidateNested()
  @Type(() => SbEmployee)
  @IsOptional()
  employeeId?: SbEmployee | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    enum: EnumSbOrderShift,
  })
  @IsEnum(EnumSbOrderShift)
  @IsOptional()
  @Field(() => EnumSbOrderShift, {
    nullable: true,
  })
  shift?: "Shift_1" | "Shift_2" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { SbOrder as SbOrder };
