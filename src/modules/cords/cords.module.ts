import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CordsModel } from './models/cords.model';
import { CordsController } from './controllers/cords.controller';
import { CordsProvider } from './providers/cords.provider';

@Module({
  imports: [SequelizeModule.forFeature([CordsModel])],
  controllers: [CordsController],
  providers: [CordsProvider],
})
export class CordsModule {}
