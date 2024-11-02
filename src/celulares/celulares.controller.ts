import { Controller, Get } from '@nestjs/common';

@Controller('celulares')
export class CelularesController {
  constructor() {}

  @Get()
  listar() {
    return [];
  }
}
