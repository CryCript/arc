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
import { SbOrderWhereUniqueInput } from "./SbOrderWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SbOrderUpdateInput } from "./SbOrderUpdateInput";

@ArgsType()
class UpdateSbOrderArgs {
  @ApiProperty({
    required: true,
    type: () => SbOrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SbOrderWhereUniqueInput)
  @Field(() => SbOrderWhereUniqueInput, { nullable: false })
  where!: SbOrderWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SbOrderUpdateInput,
  })
  @ValidateNested()
  @Type(() => SbOrderUpdateInput)
  @Field(() => SbOrderUpdateInput, { nullable: false })
  data!: SbOrderUpdateInput;
}

export { UpdateSbOrderArgs as UpdateSbOrderArgs };