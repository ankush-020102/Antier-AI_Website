import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Scene } from './entities/scene.entity';
import { CreateScenesDto } from './dto/create-scene.dto';

@Injectable()
export class ScenesService {
  constructor(
    @InjectRepository(Scene)
    private readonly sceneRepository: Repository<Scene>,
  ) {}

  async create(createScenesDto: CreateScenesDto) {
    const scenes = createScenesDto.scenes.map(sceneDto => {
      const scene = new Scene();
      Object.assign(scene, sceneDto);
      return scene;
    });

    const savedScenes = await this.sceneRepository.save(scenes);
    return {
      message: `Successfully created ${savedScenes.length} scenes`,
      scenes: savedScenes,
    };
  }
}