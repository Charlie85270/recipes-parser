import NutrifactsJs, { IRecipeResult } from "..";

process.env.LANG = "EN";
const lib = new NutrifactsJs();

test("Get nutrients in recipe - simple string (NLP)", async () => {
  const recipe: string[] = ["20gr of sugar"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(recipe);
  expect(result).not.toBeUndefined();

  if (result[0] && result[0].result) {
    expect(result[0].result.precise.ingredient).toEqual("sugar");
    expect(result[0].result.precise.unit).toEqual("gr");
    expect(result[0].result.precise.amount).toEqual(20);
  } else {
    throw new Error("fail");
  }
});