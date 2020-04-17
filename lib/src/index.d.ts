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
export declare enum LOGIC_OPERATOR {
    AND = "AND",
    OR = "OR"
}
export declare enum LANGUAGES {
    EN = "EN",
    FR = "FR"
}
export declare enum UNKNOWN_REASONS {
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
export default class NutrifactsJs {
    private nlpParser;
    getIngredientsFromText(recipeInstructions: string[]): IRecipeResult[];
}
