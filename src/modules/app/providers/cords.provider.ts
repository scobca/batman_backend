import { Injectable } from '@nestjs/common';
import { CordsModel } from '../models/cords.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CordsProvider {
  cords: CordsModel;

  constructor(@InjectModel(CordsModel) private cordsModel: CordsModel) {}

  public getCords() {
    // const cords = CordsModel;

    return 'console'
  }
}
