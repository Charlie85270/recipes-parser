import _ from "lodash";

export interface IUnits {
  wordNumbers?: any;
  nominalUnits?: any;
}

export type IGlobalUnit = any;

export default class ConversionsUtils {
  constructor(private units: IUnits, private globalUnit: IGlobalUnit) {}

  /**
   * Returns the key who has match the result
   */
  public getUnitKey(unit: string): string | undefined {
    let returnUnit = unit;

    const globalUnitKeys: string[] = Object.keys(this.globalUnit);
    const globalUnitValues: string[] = Object.values(this.globalUnit);

    for (let i = 0; i < globalUnitKeys.length; i++) {
      if (globalUnitValues[i].includes(unit)) {
        returnUnit = globalUnitKeys[i];
        i = globalUnitKeys.length;
      }
    }

    return returnUnit;
  }

  /**
   * Normalizes a given amount.
   * @param val The amount to be normalized.
   */
  public normalizeAmount(val: number | string): number {
    let out;

    // Normalizing numeric word to number
    if (this.units.wordNumbers.hasOwnProperty(val)) {
      out = (this.units.wordNumbers as any)[val];
    }

    //  Normalizing and multiply word and number amounts (3 demi oeufs, 3 demi poulet, ...)
    const mutlipleRec = /(\d+) (\w*)/gim;
    const matchesMultiple = mutlipleRec.exec(String(val));

    if (matchesMultiple) {
      if (
        matchesMultiple[1] &&
        matchesMultiple[2] &&
        this.units.wordNumbers.hasOwnProperty(matchesMultiple[2])
      ) {
        out =
          Number(matchesMultiple[1]) *
          (this.units.wordNumbers as any)[matchesMultiple[2]];
      }
    }

    // Summing up average amounts (2-3 oeufs, 4-5 grammes, ...)
    const averageRec = /(\d)?\-(\d)/gim;
    const matchesAverage = averageRec.exec(String(val));

    if (matchesAverage) {
      if (matchesAverage[1] && matchesAverage[2]) {
        out = (Number(matchesAverage[1]) + Number(matchesAverage[2])) / 2;
      }
    }

    // Summing up mixed amounts (integer and fractions)
    const fractionRe = /(\d+)?(.*)?(\d)\/(\d)/gim;
    const matches = fractionRe.exec(String(val));
    if (matches) {
      if (matches[1] && matches[3] && matches[4]) {
        out = (Number(matches[1]) * Number(matches[3])) / Number(matches[4]);
      } else {
        out = Number(matches[3]) / Number(matches[4]);
      }
    }

    if (!out) {
      out = Number(val);
    }

    return out;
  }
}
