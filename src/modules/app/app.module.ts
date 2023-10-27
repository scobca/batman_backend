import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './providers/app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { CordsModule } from '../cords/cords.module';
import { dbConf } from '../../conf/db.conf';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      ...dbConf,
    }),
    CordsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
