import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SightsController } from './sights.controller';
import { SightsService } from './sights.service';
import { SightSchema } from './sight.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'sight', schema: SightSchema }]),
  ],
  controllers: [SightsController],
  providers: [SightsService],
})
export class SightsModule {}