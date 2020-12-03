# recipes-parser

![coverage](https://raw.githubusercontent.com/Charlie85270/recipes-parser/5653f5424d15d5e8ddce3d09c35170f41f0ea062/coverage/badge-branches.svg "coverage") ![coverage](https://raw.githubusercontent.com/Charlie85270/recipes-parser/5653f5424d15d5e8ddce3d09c35170f41f0ea062/coverage/badge-functions.svg "coverage") ![coverage](https://raw.githubusercontent.com/Charlie85270/recipes-parser/5653f5424d15d5e8ddce3d09c35170f41f0ea062/coverage/badge-lines.svg "coverage") ![coverage](https://raw.githubusercontent.com/Charlie85270/recipes-parser/5653f5424d15d5e8ddce3d09c35170f41f0ea062/coverage/badge-statements.svg "coverage")

Parse recipes instructions (string text entry) and extract ingredients, units and quantity.

## Features

- Based on NLP (natural language processing) and [pegsjs](https://github.com/pegjs/pegjs "pegsjs") library
- Available in English and French, but has support for custom languages

## Install

```sh
npm install recipes-parser --save
```

## Usage

```ts
import fs from "fs";
import * as path from "path";
import RecipesParser from "recipes-parser";

import units from "recipes-parser/lib/nlp/en/units.json";
import globalUnit from "recipes-parser/lib/nlp/en/global_unit.json";
const rules = fs.readFileSync(
  path.join(__dirname, `node_modules/recipes-parser/nlp/en/rules.pegjs`),
  {
    encoding: "utf8",
  }
);

const parser = new RecipesParser(rules, units, globalUnit);

const results = parser.getIngredientsFromText(
  ["3 cl. fresh raspberries"],
  true
);
```

### `getIngredientsFromText(instructions: string[], returnUnitKey?: boolean): object: IRecipeResult[]`

### instructions

The list of instructions. Supports NLP queries.

### returnUnitKey

If true return the matched key, if false return the matched text.

```ts
IRecipeResult {
  result?: { // the result when matched OK
    instruction: string; // the instruction parsed
    unit: string; // the unit matched
    amount: number; ; // the quantity calculated
    ingredient: string; // the quantity matched
  };
  unknown: {  // the result matched OK
    instruction?: string;   // the instructon parsed
    reasons?: UNKNOWN_REASONS[]; // the array of reasons why matched is OK
  };
}

enum UNKNOWN_REASONS {
  PARSING = "mismatch during parsing",
  PARSING_AMOUNT = "unknown amount",
  PARSING_UNIT = "unknown unit",
  NO_ENTRY = "unavailable ingredient"
}

```

#### Examples

Simple number detection: **1 kilogram of chicken**

```json
{
  "result": {
    "ingredient": "chicken",
    "unit": "kg",
    "amount": 1
  }
}
```

Fraction number detection: **1/2 kilogram of chicken**

```json
{
  "result": {
    "ingredient": "chicken",
    "unit": "kg",
    "amount": 0.5
  }
}
```

Approximation number detection: **2-3 teaspoons of sugar**

```json
{
  "result": {
    "ingredient": "sugar",
    "unit": "teaspoon",
    "amount": 2.5
  }
}
```

Word number detection: **Seven teaspoons of sugar**

```json
{
  "result": {
    "ingredient": "sugar",
    "unit": "teaspoon",
    "amount": 7
  }
}
```

Word and fraction number detection: **5 1/2 liter of milk**

```json
{
  "result": {
    "ingredient": "milk",
    "unit": "liter",
    "amount": 2.5
  }
}
```

Word and number detection: **5 quarter of orange**

```json
{
  "result": {
    "ingredient": "orange",
    "unit": "undefined",
    "amount": 1.25
  }
}
```

Abbreviation units detection: **5 tbsp of milk**

```json
{
  "result": {
    "ingredient": "orange",
    "unit": "tablespoon",
    "amount": 1.25
  }
}
```

## License

MIT
