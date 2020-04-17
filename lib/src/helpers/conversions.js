"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../");
const units_EN_json_1 = __importDefault(require("../../nlp/units_EN.json"));
const units_FR_json_1 = __importDefault(require("../../nlp/units_FR.json"));
const language_1 = __importDefault(require("./language"));
class ConversionsUtils {
    /**
     * Returns a list of units for the configured language.
     */
    static getUnits() {
        switch (language_1.default.getLang()) {
            case __1.LANGUAGES.EN:
                return units_EN_json_1.default;
            case __1.LANGUAGES.FR:
                return units_FR_json_1.default;
        }
    }
    /**
     * Returns TRUE if the given unit is milligrams.
     * @param unit The unit to be checked.
     */
    static isMilligrams(unit) {
        return this.getUnits().nominalUnits.milligrams.indexOf(unit) > -1;
    }
    /**
     * Returns TRUE if the given unit is grams.
     * @param unit The unit to be checked.
     */
    static isGrams(unit) {
        return this.getUnits().nominalUnits.grams.indexOf(unit) > -1;
    }
    /**
     * Returns TRUE if the given unit is kilograms.
     * @param unit The unit to be checked.
     */
    static isKiloGrams(unit) {
        return this.getUnits().nominalUnits.kilograms.indexOf(unit) > -1;
    }
    /**
     * Returns TRUE if the given unit is milliliters.
     * @param unit The unit to be checked.
     */
    static isMilliliters(unit) {
        return this.getUnits().nominalUnits.milliliters.indexOf(unit) > -1;
    }
    /**
     * Returns TRUE if the given unit is centiliters.
     * @param unit The unit to be checked.
     */
    static isCentiliters(unit) {
        return this.getUnits().nominalUnits.centiliters.indexOf(unit) > -1;
    }
    /**
     * Returns TRUE if the given unit is liters.
     * @param unit The unit to be checked.
     */
    static isLiters(unit) {
        return this.getUnits().nominalUnits.liters.indexOf(unit) > -1;
    }
    /**
     * Tries to match the nearest unit type from a given input.
     * @param input The unit to look up.
     */
    static getNearestUnitType(input) {
        for (const i in this.getUnits().unitTypes) {
            if (!this.getUnits().unitTypes.hasOwnProperty(i)) {
                continue;
            }
            if (input.indexOf(this.getUnits().unitTypes[i]) > -1 ||
                this.getUnits().unitTypes[i].indexOf(input) > -1) {
                return this.getUnits().unitTypes[i];
            }
        }
        return this.getUnits().defaulUnitType;
    }
    /**
     * Normalizes a given amount.
     * @param val The amount to be normalized.
     */
    static normalizeAmount(val) {
        let out;
        // Normalizing numeric word to number
        if (this.getUnits().wordNumbers.hasOwnProperty(val)) {
            out = this.getUnits().wordNumbers[val];
        }
        // Summing up mixed amounts (integer and fractions)
        const fractionRe = /(\d)?(.*)?(\d)\/(\d)/gim;
        const matches = fractionRe.exec(String(val));
        if (matches) {
            if (matches[1] && matches[3] && matches[4]) {
                out = Number(matches[1]) + Number(matches[3]) / Number(matches[4]);
            }
            else {
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
    static convertToGrams(unit, type, val) {
        unit = unit.replace(/\W/g, "");
        unit = this.getUnits().pluralsMap[unit] || unit;
        if (ConversionsUtils.isMilliliters(unit)) {
            return Number(val);
        }
        if (ConversionsUtils.isCentiliters(unit)) {
            return Number(val) * 10;
        }
        if (ConversionsUtils.isLiters(unit)) {
            return Number(val) * 1000;
        }
        if (ConversionsUtils.isKiloGrams(unit)) {
            return Number(val) * 1000;
        }
        if (!this.getUnits().unitMeasuresInGrams[unit]) {
            return -1;
        }
        if (!this.getUnits().unitMeasuresInGrams[unit][type]) {
            type = this.getUnits().defaulUnitType;
        }
        return +this.getUnits().unitMeasuresInGrams[unit][type] * +val; //
    }
    /**
     * Returns the default quantity measure.
     */
    static get defaultQuantityMeasure() {
        return this.getUnits().nominalUnits.grams[0];
    }
}
exports.default = ConversionsUtils;
