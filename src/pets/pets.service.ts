import { Owner } from './../owners/entities/owner.entity';
import { OwnersService } from './../owners/owners.service';
import { CreatePetInput } from './dto/create-pet.input';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { Pet } from './pets.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private petsRepository: Repository<Pet>,
    private ownersService: OwnersService,
  ) {}

  createPet(createPetInput: CreatePetInput): Promise<Pet> {
    const newPet = this.petsRepository.create(createPetInput);

    return this.petsRepository.save(newPet);
  }

  async getAllPets(): Promise<Pet[]> {
    return this.petsRepository.find();
  }

  findOne(id: string): Promise<Pet> {
    return this.petsRepository.findOneOrFail({ where: { id } });
  }

  getOwner(ownderId: string): Promise<Owner> {
    return this.ownersService.findOne(ownderId);
  }
}
