import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
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

  @Post('test/:test')
  async testparam(
    @Body("tests") data: any,
    @Param('test') test: string
  ) {
    return data;
  }

  @Get('/check/:xCords/:yCords')
  async checkCords(
    @Param('xCords') xCords: number,
    @Param('yCords') yCords: number,
  ) {
    return await this.cordsProvider.checkCords(xCords, yCords);
  }
}
