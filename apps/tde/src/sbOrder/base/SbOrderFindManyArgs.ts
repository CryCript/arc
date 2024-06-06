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
import { SbOrderWhereInput } from "./SbOrderWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SbOrderOrderByInput } from "./SbOrderOrderByInput";

@ArgsType()
class SbOrderFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SbOrderWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SbOrderWhereInput, { nullable: true })
  @Type(() => SbOrderWhereInput)
  where?: SbOrderWhereInput;

  @ApiProperty({
    required: false,
    type: [SbOrderOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SbOrderOrderByInput], { nullable: true })
  @Type(() => SbOrderOrderByInput)
  orderBy?: Array<SbOrderOrderByInput>;

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

export { SbOrderFindManyArgs as SbOrderFindManyArgs };