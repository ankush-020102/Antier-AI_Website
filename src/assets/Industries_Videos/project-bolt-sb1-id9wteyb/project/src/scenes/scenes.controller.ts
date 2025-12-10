import { Controller, Post, Body } from '@nestjs/common';
import { ScenesService } from './scenes.service';
import { CreateScenesDto } from './dto/create-scene.dto';

@Controller('api/scenes')
export class ScenesController {
  constructor(private readonly scenesService: ScenesService) {}

  @Post()
  create(@Body() createScenesDto: CreateScenesDto) {
    return this.scenesService.create(createScenesDto);

  }
}