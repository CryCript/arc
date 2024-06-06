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
import { SbRouteWhereInput } from "./SbRouteWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SbRouteListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SbRouteWhereInput,
  })
  @ValidateNested()
  @Type(() => SbRouteWhereInput)
  @IsOptional()
  @Field(() => SbRouteWhereInput, {
    nullable: true,
  })
  every?: SbRouteWhereInput;

  @ApiProperty({
    required: false,
    type: () => SbRouteWhereInput,
  })
  @ValidateNested()
  @Type(() => SbRouteWhereInput)
  @IsOptional()
  @Field(() => SbRouteWhereInput, {
    nullable: true,
  })
  some?: SbRouteWhereInput;

  @ApiProperty({
    required: false,
    type: () => SbRouteWhereInput,
  })
  @ValidateNested()
  @Type(() => SbRouteWhereInput)
  @IsOptional()
  @Field(() => SbRouteWhereInput, {
    nullable: true,
  })
  none?: SbRouteWhereInput;
}
export { SbRouteListRelationFilter as SbRouteListRelationFilter };
