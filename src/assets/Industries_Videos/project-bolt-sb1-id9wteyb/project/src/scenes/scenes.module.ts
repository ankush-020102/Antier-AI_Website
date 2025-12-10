import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScenesController } from './scenes.controller';
import { ScenesService } from './scenes.service';
import { Scene } from './entities/scene.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Scene])],
  controllers: [ScenesController],
  providers: [ScenesService],
})
export class ScenesModule {}