import _ from "lodash";

import { LANGUAGES } from "../";
import UnitsEn from "../../nlp/units_EN.json";
import UnitsFr from "../../nlp/units_FR.json";
import { globalUnit } from "./keys";

export default class ConversionsUtils {
  /**
   * Returns a list of units for the configured language.
   */
  public static getUnits(lang: string): any {
    switch (lang) {
      case LANGUAGES.EN:
        return UnitsEn;
      case LANGUAGES.FR:
        return UnitsFr;
    }
  }

  /**
   * Returns the key who has match the result
   */
  public static getUnitKey(unit: string): string | undefined {
    let returnUnit = unit;

    for (let i = 0; i < Object.keys(globalUnit).length; i++) {
      if (Object.values(globalUnit)[i].includes(unit)) {
        returnUnit = Object.keys(globalUnit)[i];
        i = Object.keys(globalUnit).length;
      }
    }

    return returnUnit;
  }

  /**
   * Normalizes a given amount.
   * @param val The amount to be normalized.
   */
  public static normalizeAmount(lang: string, val: number | string): number {
    let out;

    // Normalizing numeric word to number
    if (this.getUnits(lang).wordNumbers.hasOwnProperty(val)) {
      out = (this.getUnits(lang).wordNumbers as any)[val];
    }

    //  Normalizing and multiply word and number amounts (3 demi oeufs, 3 demi poulet, ...)
    const mutlipleRec = /(\d+) (\w*)/gim;
    const matchesMultiple = mutlipleRec.exec(String(val));

    if (matchesMultiple) {
      if (
        matchesMultiple[1] &&
        matchesMultiple[2] &&
        this.getUnits(lang).wordNumbers.hasOwnProperty(matchesMultiple[2])
      ) {
        out =
          Number(matchesMultiple[1]) *
          (this.getUnits(lang).wordNumbers as any)[matchesMultiple[2]];
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
