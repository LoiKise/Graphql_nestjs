import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Pet } from 'src/pets/pets.entity';

@ObjectType()
@Entity()
export class Owner {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Pet, (pet) => pet.owner) // một người chủ thì có nhiều thú cưng One ở đây chỉ file entity đang đứng (ở đây là  ownerr)
  @Field((type) => [Pet], { nullable: true })
  pets?: Pet[];
}
