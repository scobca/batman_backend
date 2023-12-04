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

  //-3Math.sqrt(1-(x/7)^2)Math.sqrt(Math.abs(Math.abs(x)-4)/(Math.abs(x)-4)),Math.abs(x/2)-0.0913722(x^2)-3+Math.sqrt(1-(Math.abs(Math.abs(x)-2)-1)^2),(2.71052+(1.5-.5Math.abs(x))-1.35526Math.sqrt(4-(Math.abs(x)-1)^2))Math.sqrt(Math.abs(Math.abs(x)-1)/(Math.abs(x)-1))+0.9
  //

  public async checkCords(x: number, y: number) {
    const lines = [
      //Top line
      {
        // explicitly: true,
        line: (x) => {
          if (Math.abs(x) >= 0 && Math.abs(x) < 0.5) {
            return 2.25;
          }
          if (Math.abs(x) >= 0.5 && Math.abs(x) <= 0.75) {
            return 3 * Math.abs(x) + 0.75;
          }
          if (Math.abs(x) >= 0.75 && Math.abs(x) < 1) {
            return 9 - 8 * Math.abs(x);
          }
          if (Math.abs(x) >= 1 && Math.abs(x) < 3) {
            return (
              1.5 -
              0.5 * Math.abs(x) -
              ((3 * Math.sqrt(10)) / 7) *
                (Math.sqrt(3 - x ** 2 + 2 * Math.abs(x)) - 2)
            );
          }
          if (Math.abs(x) >= 3 && Math.abs(x) <= 7) {
            return 3 * Math.sqrt(1 - (x / 7) ** 2);
          }

          return null;
        },
      },
      //Bottom line
      {
        // explicitly: true,
        line: (x) => {
          if (Math.abs(x) >= 0 && Math.abs(x) < 4)
            return (
              Math.abs(x / 2) -
              ((3 * Math.sqrt(33) - 7) / 112) * x ** 2 +
              Math.sqrt(1 - (Math.abs(Math.abs(x) - 2) - 1) ** 2) -
              3
            );

          if (Math.abs(x) >= 4 && Math.abs(x) <= 7)
            return -3 * Math.sqrt(-((x / 7) ** 2) + 1);

          return null;
        },
      },
    ];
    const r = 3;
    let res = null;
    if (y > 0) {
      res = (lines[0].line((x / 7) * r) / 3) * (r / 2);
      console.log(res);
    } else {
      res = (lines[1].line((x / 7) * r) / 3) * (r / 2);
      console.log(res);
    }

    if (res) {
      return Math.abs(y) < Math.abs(res);
    }
  }
}
