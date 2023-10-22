import { Injectable } from '@nestjs/common';
import { CordsModel } from '../models/cords.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CordsProvider {
  // cords: CordsModel;

  constructor(@InjectModel(CordsModel) private cordsModel: CordsModel) {}

  public getCords(id: number) {
    const cords = CordsModel[id];

    if (!cords) {
      return "There's nothing here";
    } else {
      return cords;
    }
  }
}
