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
import { DbEmployeeWhereUniqueInput } from "../../dbEmployee/base/DbEmployeeWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { SbPickupPointWhereUniqueInput } from "../../sbPickupPoint/base/SbPickupPointWhereUniqueInput";
import { SbOrderWhereUniqueInput } from "../../sbOrder/base/SbOrderWhereUniqueInput";
import { SbVehicleWhereUniqueInput } from "../../sbVehicle/base/SbVehicleWhereUniqueInput";

@InputType()
class SbEmployeeCreateInput {
  @ApiProperty({
    required: false,
    type: () => DbEmployeeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DbEmployeeWhereUniqueInput)
  @IsOptional()
  @Field(() => DbEmployeeWhereUniqueInput, {
    nullable: true,
  })
  employee?: DbEmployeeWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => SbPickupPointWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SbPickupPointWhereUniqueInput)
  @IsOptional()
  @Field(() => SbPickupPointWhereUniqueInput, {
    nullable: true,
  })
  pickupPoint?: SbPickupPointWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => SbOrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SbOrderWhereUniqueInput)
  @IsOptional()
  @Field(() => SbOrderWhereUniqueInput, {
    nullable: true,
  })
  sbOrders?: SbOrderWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => SbVehicleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SbVehicleWhereUniqueInput)
  @IsOptional()
  @Field(() => SbVehicleWhereUniqueInput, {
    nullable: true,
  })
  vehicleNoShift_1?: SbVehicleWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => SbVehicleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SbVehicleWhereUniqueInput)
  @IsOptional()
  @Field(() => SbVehicleWhereUniqueInput, {
    nullable: true,
  })
  vehicleNoShift_2?: SbVehicleWhereUniqueInput | null;
}

export { SbEmployeeCreateInput as SbEmployeeCreateInput };