import { IsAlpha } from '@nestjs/class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePetInput {
  @IsAlpha()
  @Field()
  name: string;

  @Field({ nullable: true })
  type?: string;

  @Field()
  ownerId: string;
}
