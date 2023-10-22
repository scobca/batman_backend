import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './providers/app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { CordsModel } from './models/cords.model';
import { CordsProvider } from './providers/cords.provider';
import { CordsController } from './controllers/cords.controller';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      models: [CordsModel],
    }),
    SequelizeModule.forFeature([CordsModel]),
  ],
  controllers: [AppController, CordsController],
  providers: [AppService, CordsProvider],
})
export class AppModule {}
