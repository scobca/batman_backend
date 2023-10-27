import { Controller, Get, Inject } from '@nestjs/common';
import { CordsProvider } from '../providers/cords.provider';

@Controller('cords')
export class CordsController {
  constructor(@Inject(CordsProvider) private cordsProvider: CordsProvider) {}

  @Get('/get')
  getCords() {
    return this.cordsProvider.getCords(0);
  }
}
