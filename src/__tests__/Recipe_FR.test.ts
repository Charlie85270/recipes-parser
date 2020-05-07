import RecipesParser, { IRecipeResult } from "..";

process.env.LANG = "FR";
const lib = new RecipesParser();

test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["une demie cuillère à soupe de riz"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();

  if (result[0] && result[0].result) {
    expect(result[0].result.precise.ingredient).toEqual("riz");
    expect(result[0].result.precise.unit).toEqual("cuillereasoupe");
    expect(result[0].result.precise.amount).toEqual(0.5);
    expect(result[0].result.precise.totalFoodQuantity).toEqual(6);
  } else {
    throw new Error("fail");
  }
});

test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["une demie cuillère à cafe de riz"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();
  if (result[0] && result[0].result) {
    expect(result[0].result.precise.ingredient).toEqual("riz");
    expect(result[0].result.precise.unit).toEqual("cuillereacafe");
    expect(result[0].result.precise.amount).toEqual(0.5);
    expect(result[0].result.precise.totalFoodQuantity).toEqual(2);
  } else {
    throw new Error("fail");
  }
});

test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["70 cl de lait"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
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
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
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
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
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
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
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
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();
  if (result[0] && result[0].result) {
    expect(result[0].result.precise.ingredient).toEqual("poivrons");
    expect(result[0].result.precise.amount).toEqual(2);
  } else {
    throw new Error("fail");
  }
});

test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["3 pommes de terre"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();
  if (result[0] && result[0].result) {
    expect(result[0].result.precise.ingredient).toEqual("pommes de terre");
    expect(result[0].result.precise.amount).toEqual(3);
  } else {
    throw new Error("fail");
  }
});

test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["40 g de lardons"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();
  if (result[0] && result[0].result) {
    expect(result[0].result.precise.ingredient).toEqual("lardons");
    expect(result[0].result.precise.unit).toEqual("g");
    expect(result[0].result.precise.amount).toEqual(40);
  } else {
    throw new Error("fail");
  }
});

test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["30 g de gruyère"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();
  if (result[0] && result[0].result) {
    expect(result[0].result.precise.ingredient).toEqual("gruyère");
    expect(result[0].result.precise.unit).toEqual("g");
    expect(result[0].result.precise.amount).toEqual(30);
  } else {
    throw new Error("fail");
  }
});

test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["3 oeufs"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();
  if (result[0] && result[0].result) {
    expect(result[0].result.precise.ingredient).toEqual("oeufs");

    expect(result[0].result.precise.amount).toEqual(3);
  } else {
    throw new Error("fail");
  }
});

test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["1 bouteilles de poivre"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();
  if (result[0] && result[0].result) {
    expect(result[0].result.precise.ingredient).toEqual("poivre");
    expect(result[0].result.precise.unit).toEqual("bouteille");
    expect(result[0].result.precise.amount).toEqual(1);
  } else {
    throw new Error("fail");
  }
});

test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["3 poignee de poivre"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();
  if (result[0] && result[0].result) {
    expect(result[0].result.precise.ingredient).toEqual("poivre");
    expect(result[0].result.precise.unit).toEqual("poignee");
    expect(result[0].result.precise.amount).toEqual(3);
  } else {
    throw new Error("fail");
  }
});

test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["3 sachet de poivre"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();
  if (result[0] && result[0].result) {
    expect(result[0].result.precise.ingredient).toEqual("poivre");
    expect(result[0].result.precise.unit).toEqual("sachet");
    expect(result[0].result.precise.amount).toEqual(3);
  } else {
    throw new Error("fail");
  }
});
test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["100 g de pépites de chocolat"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();
  if (result[0] && result[0].result) {
    expect(result[0].result.precise.ingredient).toEqual("pépites de chocolat");
    expect(result[0].result.precise.unit).toEqual("g");
    expect(result[0].result.precise.amount).toEqual(100);
  } else {
    throw new Error("fail");
  }
});

test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["1 c.à c. de levure"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();
  if (result[0] && result[0].result) {
    expect(result[0].result.precise.ingredient).toEqual("levure");
    expect(result[0].result.precise.unit).toEqual("cuillereacafe");
    expect(result[0].result.precise.amount).toEqual(1);
  } else {
    throw new Error("fail");
  }
});

test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["1/2 sachet de levure"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();
  if (result[0] && result[0].result) {
    expect(result[0].result.precise.ingredient).toEqual("levure");
    expect(result[0].result.precise.unit).toEqual("sachet");
    expect(result[0].result.precise.amount).toEqual(0.5);
  } else {
    throw new Error("fail");
  }
});

test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["3 doses de safran"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();
  if (result[0] && result[0].result) {
    expect(result[0].result.precise.ingredient).toEqual("safran");
    expect(result[0].result.precise.unit).toEqual("dose");
    expect(result[0].result.precise.amount).toEqual(3);
  } else {
    throw new Error("fail");
  }
});

test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = [
    "1 à 2 doses de safran(ou de préparation spéciale paëlla)"
  ];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();
  if (result[0] && result[0].result) {
    expect(result[0].result.precise.ingredient).toEqual(
      "à 2 doses de safran(ou de préparation spéciale paëlla)"
    );
    expect(result[0].result.precise.unit).toEqual(undefined);
    expect(result[0].result.precise.amount).toEqual(1);
  } else {
    throw new Error("fail");
  }
});

test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["1/4 chorizo"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();
  if (result[0] && result[0].result) {
    expect(result[0].result.precise.ingredient).toEqual("chorizo");
    expect(result[0].result.precise.unit).toEqual(undefined);
    expect(result[0].result.precise.amount).toEqual(0.25);
  } else {
    throw new Error("fail");
  }
});
