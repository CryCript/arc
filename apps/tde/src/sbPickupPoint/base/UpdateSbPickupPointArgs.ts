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
import { SbPickupPointWhereUniqueInput } from "./SbPickupPointWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SbPickupPointUpdateInput } from "./SbPickupPointUpdateInput";

@ArgsType()
class UpdateSbPickupPointArgs {
  @ApiProperty({
    required: true,
    type: () => SbPickupPointWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SbPickupPointWhereUniqueInput)
  @Field(() => SbPickupPointWhereUniqueInput, { nullable: false })
  where!: SbPickupPointWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SbPickupPointUpdateInput,
  })
  @ValidateNested()
  @Type(() => SbPickupPointUpdateInput)
  @Field(() => SbPickupPointUpdateInput, { nullable: false })
  data!: SbPickupPointUpdateInput;
}

export { UpdateSbPickupPointArgs as UpdateSbPickupPointArgs };
