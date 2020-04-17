export default class ConversionsUtils {
    /**
     * Returns a list of units for the configured language.
     */
    static getUnits(): any;
    /**
     * Returns TRUE if the given unit is milligrams.
     * @param unit The unit to be checked.
     */
    static isMilligrams(unit: string): boolean;
    /**
     * Returns TRUE if the given unit is grams.
     * @param unit The unit to be checked.
     */
    static isGrams(unit: string): boolean;
    /**
     * Returns TRUE if the given unit is kilograms.
     * @param unit The unit to be checked.
     */
    static isKiloGrams(unit: string): boolean;
    /**
     * Returns TRUE if the given unit is milliliters.
     * @param unit The unit to be checked.
     */
    static isMilliliters(unit: string): boolean;
    /**
     * Returns TRUE if the given unit is centiliters.
     * @param unit The unit to be checked.
     */
    static isCentiliters(unit: string): boolean;
    /**
     * Returns TRUE if the given unit is liters.
     * @param unit The unit to be checked.
     */
    static isLiters(unit: string): boolean;
    /**
     * Tries to match the nearest unit type from a given input.
     * @param input The unit to look up.
     */
    static getNearestUnitType(input: string): string;
    /**
     * Normalizes a given amount.
     * @param val The amount to be normalized.
     */
    static normalizeAmount(val: number | string): number;
    /**
     * Converts a given amount in a given unit to grams.
     * @param unit The source unit.
     * @param type The ingredient type.
     * @param val The source value.
     */
    static convertToGrams(unit: string, type: string, val: number | string): number;
    /**
     * Returns the default quantity measure.
     */
    static get defaultQuantityMeasure(): string;
}
