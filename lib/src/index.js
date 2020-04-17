"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const lodash_1 = __importDefault(require("lodash"));
const path = __importStar(require("path"));
const pegjs_1 = __importDefault(require("pegjs"));
const conversions_1 = __importDefault(require("./helpers/conversions"));
const language_1 = __importDefault(require("./helpers/language"));
var LOGIC_OPERATOR;
(function (LOGIC_OPERATOR) {
    LOGIC_OPERATOR["AND"] = "AND";
    LOGIC_OPERATOR["OR"] = "OR";
})(LOGIC_OPERATOR = exports.LOGIC_OPERATOR || (exports.LOGIC_OPERATOR = {}));
var LANGUAGES;
(function (LANGUAGES) {
    LANGUAGES["EN"] = "EN";
    LANGUAGES["FR"] = "FR";
})(LANGUAGES = exports.LANGUAGES || (exports.LANGUAGES = {}));
var UNKNOWN_REASONS;
(function (UNKNOWN_REASONS) {
    UNKNOWN_REASONS["PARSING"] = "mismatch during parsing";
    UNKNOWN_REASONS["PARSING_AMOUNT"] = "unknown amount";
    UNKNOWN_REASONS["PARSING_UNIT"] = "unknown unit";
    UNKNOWN_REASONS["NO_ENTRY"] = "unavailable food";
})(UNKNOWN_REASONS = exports.UNKNOWN_REASONS || (exports.UNKNOWN_REASONS = {}));
class NutrifactsJs {
    constructor() {
        this.nlpParser = pegjs_1.default.generate(fs_1.default.readFileSync(path.join(__dirname, `/../nlp/nlp-rules/rules_${language_1.default.getLang()}.pegjs`), {
            encoding: "utf8"
        }));
    }
    getIngredientsFromText(recipeInstructions) {
        const output = {
            unknown: {}
        };
        // Parse and normalize the ingredients
        return lodash_1.default.map(recipeInstructions, (instruction) => {
            let totalFoodQuantity;
            const recipeStr = instruction
                .replace("½", "1/2")
                .replace("⅓", "1/3")
                .replace("¼", "1/4")
                .replace("¾", "3/4")
                .replace("⅔", "2/3");
            const parts = this.nlpParser.parse(language_1.default.removeAccentuation(recipeStr));
            if (typeof parts.amount === "undefined" ||
                typeof parts.ingredient === "undefined") {
                /*
                      TODO: When the unit is not specified it means that a whole ingredient has been provided (1 banana etc..).
                      In this case the algorithm should get the average grams of the given ingredient.
                    */
                const unknownReasons = [UNKNOWN_REASONS.PARSING];
                if (!parts.amount) {
                    unknownReasons.push(UNKNOWN_REASONS.PARSING_AMOUNT);
                }
                output.unknown[instruction] = {
                    instruction,
                    parsed: parts,
                    reasons: unknownReasons
                };
                return output;
            }
            else {
                parts.amount = conversions_1.default.normalizeAmount(parts.amount);
                totalFoodQuantity = parts.amount;
                // precise unit
                if (parts.unit) {
                    if (!conversions_1.default.isGrams(parts.unit)) {
                        totalFoodQuantity = conversions_1.default.convertToGrams(parts.unit, conversions_1.default.getNearestUnitType(parts.ingredient), parts.amount);
                    }
                }
                else {
                    // TODO calculate average grams of product
                }
                output.result = {
                    precise: {
                        container: parts.container,
                        totalFoodQuantity,
                        unit: parts.unit,
                        amount: parts.amount,
                        ingredient: parts.ingredient
                    }
                };
                return output;
            }
        });
    }
}
exports.default = NutrifactsJs;
