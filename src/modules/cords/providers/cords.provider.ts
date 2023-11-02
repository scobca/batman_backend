import { Injectable } from '@nestjs/common';
import { CordsModel } from '../models/cords.model';

@Injectable()
export class CordsProvider {
  // constructor(@InjectModel(CordsModel) private cordsModel: CordsModel) {}

  public async getCords(id: number) {
    const res = await CordsModel.findOne({
      where: {
        id: id,
      },
    });

    return res != null ? res : 'There are no coordinates with this id';
    // return CordsModel.length;
  }

  public async addCords(x: number, y: number): Promise<CordsModel> {
    return await CordsModel.create({
      xCords: x,
      yCords: y,
    });
  }
}
