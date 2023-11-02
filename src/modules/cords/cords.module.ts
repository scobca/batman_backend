import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CordsController } from './controllers/cords.controller';
import { CordsProvider } from './providers/cords.provider';
import { CordsModel } from './models/cords.model';

@Module({
  imports: [SequelizeModule.forFeature([CordsModel])],
  controllers: [CordsController],
  providers: [CordsProvider],
})
export class CordsModule {}
