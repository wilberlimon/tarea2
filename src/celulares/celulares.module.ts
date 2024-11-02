import { Module } from '@nestjs/common';
import { CelularesService } from './celulares.service';
import { CelularesController } from './celulares.controller';

@Module({
  providers: [CelularesService],
  controllers: [CelularesController]
})
export class CelularesModule {}
