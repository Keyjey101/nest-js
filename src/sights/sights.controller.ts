import {
    Controller,
    Post,
    Body,
    Get,
    
    
  } from '@nestjs/common';
  
  import { SightsService } from './sights.service';
  
  @Controller('/:x/sights')
  export class SightsController {
    constructor(private readonly SightsService: SightsService) {}
  
    @Post()
    async addSight(
      @Body('name') sightName: string,
      @Body('description') sightDesc: string,
      @Body('architect') sightArchitect: string,
    ) {
      const generatedId = await this.SightsService.insertSight(
        sightName,
        sightDesc,
        sightArchitect,
      );
      return { id: generatedId };
    }
  
    @Get()
    async getAllsights() {
      const sights = await this.SightsService.getSights();
      return sights;
    }
  
    
  }