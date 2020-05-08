import fs from "fs";
import _ from "lodash";
import * as path from "path";
import peg from "pegjs";

import ConversionsUtils from "./helpers/conversions";

export interface IRecipeResult {
  result?: {
    precise: {
      container: string;
      totalFoodQuantity: number;
      unit: number;
      amount: string;
      ingredient: string;
    };
  };
  unknown: {
    [label: string]: {
      instruction: string;
      parsed?: string[];
      reasons?: UNKNOWN_REASONS[];
    };
  };
}

export enum LOGIC_OPERATOR {
  AND = "AND",
  OR = "OR"
}

export enum LANGUAGES {
  EN = "EN",
  FR = "FR"
}

export enum UNKNOWN_REASONS {
  PARSING = "mismatch during parsing",
  PARSING_AMOUNT = "unknown amount",
  PARSING_UNIT = "unknown unit",
  NO_ENTRY = "unavailable food"
}

export interface IInputIngredient {
  recipeStr?: string;
  label?: string;
  quantity?: number;
}

export default class RecipesParser {
  private nlpParser: peg.Parser = peg.generate(
    fs.readFileSync(
      path.join(__dirname, `/../nlp/nlp-rules/rules_${this.langage}.pegjs`),
      {
        encoding: "utf8"
      }
    )
  );
  constructor(private langage: "FR" | "EN") {}

  public getIngredientsFromText(
    recipeInstructions: string[],
    returnUnitKey?: boolean
  ): IRecipeResult[] {
    const output: IRecipeResult = {
      unknown: {}
    };

    // Parse and normalize the ingredients
    return _.map(recipeInstructions, (instruction: string) => {
      let totalFoodQuantity: number;

      const recipeStr = instruction
        .replace("½", "1/2")
        .replace("⅓", "1/3")
        .replace("¼", "1/4")
        .replace("¾", "3/4")
        .replace("⅔", "2/3");
      const parts = this.nlpParser.parse(recipeStr);

      if (
        typeof parts.amount === "undefined" ||
        typeof parts.ingredient === "undefined"
      ) {
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
      } else {
        parts.amount = ConversionsUtils.normalizeAmount(
          this.langage,
          parts.amount
        );
        totalFoodQuantity = parts.amount;

        // get unit key match
        if (returnUnitKey) {
          parts.unit = ConversionsUtils.getUnitKey(parts.unit);
        }

        if (parts.unit) {
          if (!ConversionsUtils.isGrams(this.langage, parts.unit)) {
            totalFoodQuantity = ConversionsUtils.convertToGrams(
              this.langage,
              parts.unit,
              ConversionsUtils.getNearestUnitType(
                this.langage,
                parts.ingredient
              ),
              parts.amount
            );
          }
        } else {
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
