import NutrifactsJs, { IRecipeResult } from "..";

process.env.LANG = "FR";
const lib = new NutrifactsJs();

test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["une demie cuillère à soupe de riz"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(recipe);
  expect(result).not.toBeUndefined();

  if (result[0] && result[0].result) {
    expect(result[0].result.precise.ingredient).toEqual("riz");
    expect(result[0].result.precise.unit).toEqual("cuillere a soupe");
    expect(result[0].result.precise.amount).toEqual(0.5);
    expect(result[0].result.precise.totalFoodQuantity).toEqual(6);
  } else {
    throw new Error("fail");
  }
});

test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["une demie cuillère à cafe de riz"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(recipe);
  expect(result).not.toBeUndefined();
  if (result[0] && result[0].result) {
    expect(result[0].result.precise.ingredient).toEqual("riz");
    expect(result[0].result.precise.unit).toEqual("cuillere a cafe");
    expect(result[0].result.precise.amount).toEqual(0.5);
    expect(result[0].result.precise.totalFoodQuantity).toEqual(2);
  } else {
    throw new Error("fail");
  }
});

test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["70 cl de lait"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(recipe);
  expect(result).not.toBeUndefined();
  if (result[0] && result[0].result) {
    expect(result[0].result.precise.ingredient).toEqual("lait");
    expect(result[0].result.precise.unit).toEqual("cl");
    expect(result[0].result.precise.amount).toEqual(70);
    expect(result[0].result.precise.totalFoodQuantity).toEqual(700);
  } else {
    throw new Error("fail");
  }
});
test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["500 g de riz"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(recipe);
  expect(result).not.toBeUndefined();
  if (result[0] && result[0].result) {
    expect(result[0].result.precise.ingredient).toEqual("riz");
    expect(result[0].result.precise.unit).toEqual("g");
    expect(result[0].result.precise.amount).toEqual(500);
    expect(result[0].result.precise.totalFoodQuantity).toEqual(500);
  } else {
    throw new Error("fail");
  }
});

test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["1 kg de filet de poulet"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(recipe);
  expect(result).not.toBeUndefined();
  if (result[0] && result[0].result) {
    expect(result[0].result.precise.ingredient).toEqual("filet de poulet");
    expect(result[0].result.precise.unit).toEqual("kg");
    expect(result[0].result.precise.amount).toEqual(1);
    expect(result[0].result.precise.totalFoodQuantity).toEqual(1000);
  } else {
    throw new Error("fail");
  }
});

test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["1 l de moules"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(recipe);
  expect(result).not.toBeUndefined();
  if (result[0] && result[0].result) {
    expect(result[0].result.precise.ingredient).toEqual("moules");
    expect(result[0].result.precise.unit).toEqual("l");
    expect(result[0].result.precise.amount).toEqual(1);
    expect(result[0].result.precise.totalFoodQuantity).toEqual(1000);
  } else {
    throw new Error("fail");
  }
});

test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["2 poivrons"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(recipe);
  expect(result).not.toBeUndefined();
  if (result[0] && result[0].result) {
    expect(result[0].result.precise.ingredient).toEqual("poivrons");
    expect(result[0].result.precise.amount).toEqual(2);
  } else {
    throw new Error("fail");
  }
});
