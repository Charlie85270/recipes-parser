import _ from "lodash";
import peg from "pegjs";
import ConversionsUtils, { IUnits } from "./helpers/conversions";

export interface IRecipeResult {
  result?: {
    instruction: string;
    unit: number;
    amount: string;
    ingredient: string;
  };
  unknown: {
    instruction?: string;
    reasons?: UNKNOWN_REASONS[];
  };
}

export enum LOGIC_OPERATOR {
  AND = "AND",
  OR = "OR",
}

export enum UNKNOWN_REASONS {
  PARSING = "mismatch during parsing",
  PARSING_AMOUNT = "unknown amount",
  PARSING_UNIT = "unknown unit",
  NO_ENTRY = "unavailable ingredient",
}

export interface IInputIngredient {
  recipeStr?: string;
  label?: string;
  quantity?: number;
}

export default class RecipesParser {
  private nlpParser: peg.Parser = peg.generate(this.rules);

  private conversionsUtils: ConversionsUtils = new ConversionsUtils(
    this.units,
    this.globalUnit
  );

  constructor(
    private rules: string,
    private units: IUnits,
    private globalUnit: any
  ) {}

  public getIngredientsFromText(
    recipeInstructions: string[],
    returnUnitKey?: boolean
  ): IRecipeResult[] {
    const output: IRecipeResult = {
      unknown: {},
    };

    // Parse and normalize the ingredients
    return _.map(recipeInstructions, (instruction: string) => {
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
        const unknownReasons = [UNKNOWN_REASONS.PARSING];
        if (!parts.amount) {
          unknownReasons.push(UNKNOWN_REASONS.PARSING_AMOUNT);
        }

        output.unknown = {
          instruction,
          reasons: unknownReasons,
        };
        return output;
      } else {
        parts.amount = this.conversionsUtils.normalizeAmount(parts.amount);

        // get unit key match
        if (returnUnitKey) {
          parts.unit = this.conversionsUtils.getUnitKey(parts.unit);
        }

        output.result = {
          instruction,
          unit: parts.unit,
          amount: parts.amount,
          ingredient: parts.ingredient,
        };
        return output;
      }
    });
  }
}
