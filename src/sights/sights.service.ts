import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Sight } from './sight.model';

@Injectable()
export class SightsService {
  constructor(
    @InjectModel('sight') private readonly sightModel: Model<Sight>,
  ) {}

  async insertSight(name: string, description: string, architect: string) {
    const newSight = new this.sightModel({
      name,
      description,
      architect,
    });
    const result = await newSight.save();
    return result.id as string;
  }

  async getSights() {
    const sights = await this.sightModel.find().exec();
    return sights.map(sight => ({
      id: sight.id,
      name: sight.name,
      description: sight.description,
      architect: sight.architect,
    }));
  }

  
}