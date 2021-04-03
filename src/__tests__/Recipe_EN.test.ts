import fs from "fs";
import * as path from "path";
import RecipesParser, { IRecipeResult } from "..";
import units from "../../nlp/en/units.json";
import globalUnit from "../../nlp/en/global_unit.json";

const rules = fs.readFileSync(
  path.join(__dirname, `../../nlp/en/rules.pegjs`),
  {
    encoding: "utf8",
  }
);

const lib = new RecipesParser(rules, units, globalUnit);

test("Get ingredient in recipe - simple string (NLP)", async () => {
  const recipe: string[] = ["20gr of sugar"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();

  if (result[0] && result[0].result) {
    expect(result[0].result.ingredient).toEqual("sugar");
    expect(result[0].result.unit).toEqual("g");
    expect(result[0].result.amount).toEqual(20);
  } else {
    throw new Error("fail");
  }
});

test("Get nutrients in recipe - simple string (NLP)", async () => {
  const recipe: string[] = ["1 tablespoon water"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();

  if (result[0] && result[0].result) {
    expect(result[0].result.ingredient).toEqual("water");
    expect(result[0].result.unit).toEqual("tablespoon");
    expect(result[0].result.amount).toEqual(1);
  } else {
    throw new Error("fail");
  }
});

test("Get nutrients in recipe - simple string (NLP)", async () => {
  const recipe: string[] = ["3 cl. fresh raspberries"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();

  if (result[0] && result[0].result) {
    expect(result[0].result.ingredient).toEqual("fresh raspberries");
    expect(result[0].result.unit).toEqual("cl");
    expect(result[0].result.amount).toEqual(3);
  } else {
    throw new Error("fail");
  }
});

test("Get nutrients in recipe - simple string (NLP)", async () => {
  const recipe: string[] = ["6 slices white bread"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();

  if (result[0] && result[0].result) {
    expect(result[0].result.ingredient).toEqual("white bread");
    expect(result[0].result.unit).toEqual("slice");
    expect(result[0].result.amount).toEqual(6);
  } else {
    throw new Error("fail");
  }
});

test("Get nutrients in recipe - simple string (NLP)", async () => {
  const recipe: string[] = ["1 slice white bread"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();

  if (result[0] && result[0].result) {
    expect(result[0].result.ingredient).toEqual("white bread");
    expect(result[0].result.unit).toEqual("slice");
    expect(result[0].result.amount).toEqual(1);
  } else {
    throw new Error("fail");
  }
});

test("Get nutrients in recipe - simple string (NLP)", async () => {
  const recipe: string[] = ["¾ cup white sugar"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();

  if (result[0] && result[0].result) {
    expect(result[0].result.ingredient).toEqual("white sugar");
    expect(result[0].result.unit).toEqual("cup");
    expect(result[0].result.amount).toEqual(0.75);
  } else {
    throw new Error("fail");
  }
});

test("Get nutrients in recipe - simple string (NLP)", async () => {
  const recipe: string[] = ["1 pinch ground nutmeg, or to taste"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();

  if (result[0] && result[0].result) {
    expect(result[0].result.ingredient).toEqual("ground nutmeg, or to taste");
    expect(result[0].result.unit).toEqual("pinch");
    expect(result[0].result.amount).toEqual(1);
  } else {
    throw new Error("fail");
  }
});

test("Get nutrients in recipe - simple string (NLP)", async () => {
  const recipe: string[] = ["10 mlg milk"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();

  if (result[0] && result[0].result) {
    expect(result[0].result.ingredient).toEqual("milk");
    expect(result[0].result.unit).toEqual("mg");
    expect(result[0].result.amount).toEqual(10);
  } else {
    throw new Error("fail");
  }
});

test("Get nutrients in recipe - simple string (NLP)", async () => {
  const recipe: string[] = ["10 1/2 liter milk"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();

  if (result[0] && result[0].result) {
    expect(result[0].result.ingredient).toEqual("milk");
    expect(result[0].result.unit).toEqual("l");
    expect(result[0].result.amount).toEqual(5);
  } else {
    throw new Error("fail");
  }
});

test("Get nutrients in recipe - simple string (NLP)", async () => {
  const recipe: string[] = ["2 1/2 liter milk"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();

  if (result[0] && result[0].result) {
    expect(result[0].result.ingredient).toEqual("milk");
    expect(result[0].result.unit).toEqual("l");
    expect(result[0].result.amount).toEqual(1);
  } else {
    throw new Error("fail");
  }
});

test("Get nutrients in recipe - simple string (NLP)", async () => {
  const recipe: string[] = ["5 quarter of orange"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();

  if (result[0] && result[0].result) {
    expect(result[0].result.ingredient).toEqual("orange");
    expect(result[0].result.amount).toEqual(1.25);
  } else {
    throw new Error("fail");
  }
});


test("Get nutrients in multi step recipe - simple string (NLP)", async () => {
  const recipe: string[] = ["2 1/2 liter milk", "5 quarter of orange"];
  const result: IRecipeResult[] = await lib.getIngredientsFromText(
    recipe,
    true
  );
  expect(result).not.toBeUndefined();

  if (result[0] && result[0].result && result[1] && result[1].result) {
    expect(result[0].result.ingredient).toEqual("milk");
    expect(result[0].result.unit).toEqual("l");
    expect(result[0].result.amount).toEqual(1);

    expect(result[1].result.ingredient).toEqual("orange");
    expect(result[1].result.amount).toEqual(1.25);
  } else {
    throw new Error("fail");
  }
});
