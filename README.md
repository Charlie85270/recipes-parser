# recipes-parser.js

![coverage](https://raw.githubusercontent.com/Charlie85270/recipes-parser/5653f5424d15d5e8ddce3d09c35170f41f0ea062/coverage/badge-branches.svg "coverage") ![coverage](https://raw.githubusercontent.com/Charlie85270/recipes-parser/5653f5424d15d5e8ddce3d09c35170f41f0ea062/coverage/badge-functions.svg "coverage") ![coverage](https://raw.githubusercontent.com/Charlie85270/recipes-parser/5653f5424d15d5e8ddce3d09c35170f41f0ea062/coverage/badge-lines.svg "coverage") ![coverage](https://raw.githubusercontent.com/Charlie85270/recipes-parser/5653f5424d15d5e8ddce3d09c35170f41f0ea062/coverage/badge-statements.svg "coverage")

#### Parse recipes instructions (string text entry) and exctract aliments, units and quantity.

- Based on NLP (natural language processing) and [pegsjs](https://github.com/pegjs/pegjs "pegsjs") library
- Available in EN and FR

#### Exemple

Simple number detection : **1 kilogram of chicken**

```json
result : {
  "ingredient": "chicken",
  "unit": "kg",
  "amount": 1,
}
```

Fraction number detection : **1/2 kilogram of chicken**

```json
result : {
  "ingredient": "chicken",
  "unit": "kg",
  "amount": 0.5,
}
```

Approximation number detection : **2-3 teaspoons of sugar**

```json
result : {
  "ingredient": "sugar",
  "unit": "teaspoon",
  "amount": 2.5,
}
```

word number detection : **Seven teaspoons of sugar**

```json
result : {
  "ingredient": "sugar",
  "unit": "teaspoon",
  "amount": 7,
}
```

word and fraction number detection : **5 1/2 liter of milk**

```json
result : {
  "ingredient": "milk",
  "unit": 'liter'',
  "amount": 2.5,
}
```

word and number detection : **5 quarter of orange**

```json
result : {
  "ingredient": "orange",
  "unit": undefined,
  "amount": 1.25,
}
```

Abbreviation units detection : **5 tbsp of milk**

```json
result : {
  "ingredient": "orange",
  "unit": "tablespoon",
  "amount": 1.25,
}
```

---

### Possible retourned key unit (keys are always return in EN)

- tablespoon, teaspoon
- mg, g, kg
- ml, cl, dcl, l
- cup
- glass
- bowl
- bottle
- gallon
- ounce
- pint
- pound
- quart
- pinch
- handful
- zest
- slice
- touch
- packet
- envelope
- splash
- sprig
- sheet
- bag
- dose
- undefined (if not found)

# USE

## Returns the list of ingredients ,weights and units from a given list of instruction.

```
import RecipesParser from 'recipes-parser';
//for FR Detection : const parser = new RecipesParser('FR');
const parser = new RecipesParser('FR');
const results = parser.getIngredientsFromText(['3 cl. fresh raspberries'], true);
```

@param instructions -- The list of instructions. Supports NLP queries (recipeStr)
@param matchedKey -- If true return the matched key, if false return the matched text

**getIngredientsFromText**(instructions: string[], returnUnitKey?: boolean )

**return object : ** Array of IRecipeResult;

```javascript
IRecipeResult {
  result?: { // the result when matched OK
    instruction: string; // the instruction parsed
    unit: string; // the unit matched
    amount: number; ; // the quantity calculated
    ingredient: string; // the quantity matched
  };
  unknown: {  // the result matched KO
    instruction?: string;   // the instructon parsed
    reasons?: UNKNOWN_REASONS[]; // the array of reasons why matched is KO
  };
}

enum UNKNOWN_REASONS {
  PARSING = "mismatch during parsing",
  PARSING_AMOUNT = "unknown amount",
  PARSING_UNIT = "unknown unit",
  NO_ENTRY = "unavailable ingredient"
}

```

## License

MIT
