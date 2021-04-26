import { EntityRepository, Repository } from 'typeorm';
import { Phone } from '../entities/phone.entity';

@EntityRepository(Phone)
export class PhoneRepository extends Repository<Phone> {}