import _ from "lodash";

import { LANGUAGES } from "../";
import UnitsEn from "../../nlp/units_EN.json";
import UnitsFr from "../../nlp/units_FR.json";
import LanguageUtils from "./language";
import { globalUnit } from "./models_FR";

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
   * Returns TRUE if the given unit is milligrams.
   * @param unit The unit to be checked.
   */
  public static isMilligrams(lang: string, unit: string): boolean {
    return this.getUnits(lang).nominalUnits.milligrams.indexOf(unit) > -1;
  }

  /**
   * Returns TRUE if the given unit is grams.
   * @param unit The unit to be checked.
   */
  public static isGrams(lang: string, unit: string): boolean {
    return this.getUnits(lang).nominalUnits.grams.indexOf(unit) > -1;
  }

  /**
   * Returns TRUE if the given unit is kilograms.
   * @param unit The unit to be checked.
   */
  public static isKiloGrams(lang: string, unit: string): boolean {
    return this.getUnits(lang).nominalUnits.kilograms.indexOf(unit) > -1;
  }

  /**
   * Returns TRUE if the given unit is milliliters.
   * @param unit The unit to be checked.
   */
  public static isMilliliters(lang: string, unit: string): boolean {
    return this.getUnits(lang).nominalUnits.milliliters.indexOf(unit) > -1;
  }

  /**
   * Returns TRUE if the given unit is centiliters.
   * @param unit The unit to be checked.
   */
  public static isCentiliters(lang: string, unit: string): boolean {
    return this.getUnits(lang).nominalUnits.centiliters.indexOf(unit) > -1;
  }

  /**
   * Returns TRUE if the given unit is liters.
   * @param unit The unit to be checked.
   */
  public static isLiters(lang: string, unit: string): boolean {
    return this.getUnits(lang).nominalUnits.liters.indexOf(unit) > -1;
  }

  /**
   * Tries to match the nearest unit type from a given input.
   * @param input The unit to look up.
   */
  public static getNearestUnitType(lang: string, input: string): string {
    for (const i in this.getUnits(lang).unitTypes) {
      if (!this.getUnits(lang).unitTypes.hasOwnProperty(i)) {
        continue;
      }

      if (
        input.indexOf(this.getUnits(lang).unitTypes[i]) > -1 ||
        this.getUnits(lang).unitTypes[i].indexOf(input) > -1
      ) {
        return this.getUnits(lang).unitTypes[i];
      }
    }

    return this.getUnits(lang).defaulUnitType;
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

    // Summing up moyen amounts (2-3 oeufs, 4-5 grammes, ...)
    const moyenRec = /(\d)?\-(\d)/gim;
    const matchesMoyen = moyenRec.exec(String(val));

    if (matchesMoyen) {
      if (matchesMoyen[1] && matchesMoyen[2]) {
        out = (Number(matchesMoyen[1]) + Number(matchesMoyen[2])) / 2;
      }
    }

    // Summing up mixed amounts (integer and fractions)
    const fractionRe = /(\d)?(.*)?(\d)\/(\d)/gim;
    const matches = fractionRe.exec(String(val));
    if (matches) {
      if (matches[1] && matches[3] && matches[4]) {
        out = Number(matches[1]) + Number(matches[3]) / Number(matches[4]);
      } else {
        out = Number(matches[3]) / Number(matches[4]);
      }
    }

    if (!out) {
      out = Number(val);
    }

    return out;
  }

  /**
   * Converts a given amount in a given unit to grams.
   * @param unit The source unit.
   * @param type The ingredient type.
   * @param val The source value.
   */
  public static convertToGrams(
    lang: string,
    unit: string,
    type: string,
    val: number | string
  ): number {
    unit = unit.replace(/\W/g, "");

    unit = (this.getUnits(lang).pluralsMap as any)[unit] || unit;

    if (ConversionsUtils.isMilliliters(lang, unit)) {
      return Number(val);
    }

    if (ConversionsUtils.isCentiliters(lang, unit)) {
      return Number(val) * 10;
    }

    if (ConversionsUtils.isLiters(lang, unit)) {
      return Number(val) * 1000;
    }
    if (ConversionsUtils.isKiloGrams(lang, unit)) {
      return Number(val) * 1000;
    }

    if (!(this.getUnits(lang).unitMeasuresInGrams as any)[unit]) {
      return -1;
    }

    if (!(this.getUnits(lang).unitMeasuresInGrams as any)[unit][type]) {
      type = this.getUnits(lang).defaulUnitType;
    }

    return +(this.getUnits(lang).unitMeasuresInGrams as any)[unit][type] * +val; //
  }
}
