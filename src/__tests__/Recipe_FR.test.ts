import RecipesParser, { IRecipeResult } from "..";

const lib = new RecipesParser("FR");

test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["une demie cuillère à soupe de riz"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();

  if (result[0] && result[0].result) {
    expect(result[0].result.ingredient).toEqual("riz");
    expect(result[0].result.unit).toEqual("tablespoon");
    expect(result[0].result.amount).toEqual(0.5);
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
    expect(result[0].result.ingredient).toEqual("riz");
    expect(result[0].result.unit).toEqual("teaspoon");
    expect(result[0].result.amount).toEqual(0.5);
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
    expect(result[0].result.ingredient).toEqual("lait");
    expect(result[0].result.unit).toEqual("cl");
    expect(result[0].result.amount).toEqual(70);
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
    expect(result[0].result.ingredient).toEqual("riz");
    expect(result[0].result.unit).toEqual("g");
    expect(result[0].result.amount).toEqual(500);
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
    expect(result[0].result.ingredient).toEqual("filet de poulet");
    expect(result[0].result.unit).toEqual("kg");
    expect(result[0].result.amount).toEqual(1);
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
    expect(result[0].result.ingredient).toEqual("moules");
    expect(result[0].result.unit).toEqual("l");
    expect(result[0].result.amount).toEqual(1);
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
    expect(result[0].result.ingredient).toEqual("poivrons");
    expect(result[0].result.amount).toEqual(2);
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
    expect(result[0].result.ingredient).toEqual("pommes de terre");
    expect(result[0].result.amount).toEqual(3);
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
    expect(result[0].result.ingredient).toEqual("lardons");
    expect(result[0].result.unit).toEqual("g");
    expect(result[0].result.amount).toEqual(40);
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
    expect(result[0].result.ingredient).toEqual("gruyère");
    expect(result[0].result.unit).toEqual("g");
    expect(result[0].result.amount).toEqual(30);
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
    expect(result[0].result.ingredient).toEqual("oeufs");

    expect(result[0].result.amount).toEqual(3);
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
    expect(result[0].result.ingredient).toEqual("poivre");
    expect(result[0].result.unit).toEqual("bottle");
    expect(result[0].result.amount).toEqual(1);
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
    expect(result[0].result.ingredient).toEqual("poivre");
    expect(result[0].result.unit).toEqual("handful");
    expect(result[0].result.amount).toEqual(3);
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
    expect(result[0].result.ingredient).toEqual("poivre");
    expect(result[0].result.unit).toEqual("bag");
    expect(result[0].result.amount).toEqual(3);
  } else {
    throw new Error("fail");
  }
});
test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["100 grammes de pépites de chocolat"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();
  if (result[0] && result[0].result) {
    expect(result[0].result.ingredient).toEqual("pépites de chocolat");
    expect(result[0].result.unit).toEqual("g");
    expect(result[0].result.amount).toEqual(100);
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
    expect(result[0].result.ingredient).toEqual("levure");
    expect(result[0].result.unit).toEqual("teaspoon");
    expect(result[0].result.amount).toEqual(1);
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
    expect(result[0].result.ingredient).toEqual("levure");
    expect(result[0].result.unit).toEqual("bag");
    expect(result[0].result.amount).toEqual(0.5);
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
    expect(result[0].result.ingredient).toEqual("safran");
    expect(result[0].result.unit).toEqual("dose");
    expect(result[0].result.amount).toEqual(3);
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
    expect(result[0].result.ingredient).toEqual(
      "à 2 doses de safran(ou de préparation spéciale paëlla)"
    );
    expect(result[0].result.unit).toEqual(undefined);
    expect(result[0].result.amount).toEqual(1);
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
    expect(result[0].result.ingredient).toEqual("chorizo");
    expect(result[0].result.unit).toEqual(undefined);
    expect(result[0].result.amount).toEqual(0.25);
  } else {
    throw new Error("fail");
  }
});
test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["2 c. à soupe de graines de chia"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();
  if (result[0] && result[0].result) {
    expect(result[0].result.ingredient).toEqual("graines de chia");
    expect(result[0].result.unit).toEqual("tablespoon");
    expect(result[0].result.amount).toEqual(2);
  } else {
    throw new Error("fail");
  }
});

test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["3 c. à soupe d’huile de coco + pour le moule"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();
  if (result[0] && result[0].result) {
    expect(result[0].result.ingredient).toEqual(
      "d’huile de coco + pour le moule"
    );
    expect(result[0].result.unit).toEqual("tablespoon");
    expect(result[0].result.amount).toEqual(3);
  } else {
    throw new Error("fail");
  }
});

test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["1 tranche de citron"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();
  if (result[0] && result[0].result) {
    expect(result[0].result.ingredient).toEqual("citron");
    expect(result[0].result.unit).toEqual("slice");
    expect(result[0].result.amount).toEqual(1);
  } else {
    throw new Error("fail");
  }
});

test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["1 zeste d’huile de coco"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();
  if (result[0] && result[0].result) {
    expect(result[0].result.ingredient).toEqual("d’huile de coco");
    expect(result[0].result.unit).toEqual("zest");
    expect(result[0].result.amount).toEqual(1);
  } else {
    throw new Error("fail");
  }
});

test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["1/2 lit. de fond de veau en poudre"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();
  if (result[0] && result[0].result) {
    expect(result[0].result.ingredient).toEqual("fond de veau en poudre");
    expect(result[0].result.unit).toEqual("l");
    expect(result[0].result.amount).toEqual(0.5);
  } else {
    throw new Error("fail");
  }
});

test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["2-3 c. à café Fond de veau en poudre"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();
  if (result[0] && result[0].result) {
    expect(result[0].result.ingredient).toEqual("Fond de veau en poudre");
    expect(result[0].result.unit).toEqual("teaspoon");
    expect(result[0].result.amount).toEqual(2.5);
  } else {
    throw new Error("fail");
  }
});

test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["3 demi poulet"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();
  if (result[0] && result[0].result) {
    expect(result[0].result.ingredient).toEqual("poulet");

    expect(result[0].result.amount).toEqual(1.5);
  } else {
    throw new Error("fail");
  }
});

test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["2-3 poulet"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();
  if (result[0] && result[0].result) {
    expect(result[0].result.ingredient).toEqual("poulet");

    expect(result[0].result.amount).toEqual(2.5);
  } else {
    throw new Error("fail");
  }
});

test("Test recipe instructions - simple string (NLP)", async () => {
  const recipe: string[] = ["2 sachet de poulet"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    false
  );
  expect(result).not.toBeUndefined();
  if (result[0] && result[0].result) {
    expect(result[0].result.ingredient).toEqual("poulet");
    expect(result[0].result.unit).toEqual("sachet");
    expect(result[0].result.amount).toEqual(2);
  } else {
    throw new Error("fail");
  }
});

test("Test recipe error", async () => {
  const recipe: string[] = ["cette phrase ne fonctionnera pas"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result[0].unknown.reasons).not.toBeUndefined();
});
