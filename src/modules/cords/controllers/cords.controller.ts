import { Controller, Get, Inject, Param } from '@nestjs/common';
import { CordsProvider } from '../providers/cords.provider';

@Controller('cords')
export class CordsController {
  constructor(@Inject(CordsProvider) private cordsProvider: CordsProvider) {}

  @Get('/get/:id')
  async getCords(@Param('id') id: number) {
    return await this.cordsProvider.getCords(id);
  }

  @Get('/add/:xCords/:yCords')
  async addCords(
    @Param('xCords') xCords: number,
    @Param('yCords') yCords: number,
  ) {
    return await this.cordsProvider.addCords(xCords, yCords);
  }
}
