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
import { SbProvider } from "../../sbProvider/base/SbProvider";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { SbRoute } from "../../sbRoute/base/SbRoute";
import { SbEmployee } from "../../sbEmployee/base/SbEmployee";
import { EnumSbVehicleShift } from "./EnumSbVehicleShift";
import { EnumSbVehicleVehicleType } from "./EnumSbVehicleVehicleType";

@ObjectType()
class SbVehicle {
  @ApiProperty({
    required: false,
    type: () => SbProvider,
  })
  @ValidateNested()
  @Type(() => SbProvider)
  @IsOptional()
  company?: SbProvider | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  driver!: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  driverPhoto!: JsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  noPol!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  noUnit!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phoneNo!: string | null;

  @ApiProperty({
    required: false,
    type: () => SbRoute,
  })
  @ValidateNested()
  @Type(() => SbRoute)
  @IsOptional()
  route?: SbRoute | null;

  @ApiProperty({
    required: false,
    type: () => [SbEmployee],
  })
  @ValidateNested()
  @Type(() => SbEmployee)
  @IsOptional()
  sbEmployee?: Array<SbEmployee>;

  @ApiProperty({
    required: false,
    type: () => [SbEmployee],
  })
  @ValidateNested()
  @Type(() => SbEmployee)
  @IsOptional()
  sbEmployees?: Array<SbEmployee>;

  @ApiProperty({
    required: false,
    enum: EnumSbVehicleShift,
    isArray: true,
  })
  @IsEnum(EnumSbVehicleShift, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumSbVehicleShift], {
    nullable: true,
  })
  shift?: Array<"Shift_1" | "Shift_2">;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  vehiclePhoto!: JsonValue;

  @ApiProperty({
    required: false,
    enum: EnumSbVehicleVehicleType,
  })
  @IsEnum(EnumSbVehicleVehicleType)
  @IsOptional()
  @Field(() => EnumSbVehicleVehicleType, {
    nullable: true,
  })
  vehicleType?: "BigBus" | "MiniBus" | null;
}

export { SbVehicle as SbVehicle };
