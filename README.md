# recipes-parser.js

#### A library to parse recipes (string text entry) and exctract aliments, units and weights in EN and FR.

#

recipes-parser.js is a library to extract aliments, units and weights from a text phrase in. The library processing natural language strings and retrieving information from two langage (FR and EN)

Example EN: '1/2 kilogram of chicken'

```json
result : {
  "ingredient": "chicken",
  "unit": "kg",
  "amount": 0.5,
}
```

Example FR: 'une demie cuillère à soupe de riz'

```json
result : {
  "ingredient": "riz",
  "unit": "cuillereasoupe",
  "amount": 0.5,
}
```

Example FR: '70cl d'huile d'olive'

```json
result : {
  "ingredient": "huile d'olive",
  "unit": "cl",
  "amount": 70,

}
```

---

# API

## Returns the list of ingredients ,weights and units from a given list of instruction.

```
import RecipesParser from 'recipes-parser';
const parser = new RecipesParser('FR');
const results = parser.getIngredientsFromText(['70 grammes de chocolat']);
```

\_@param instructions -- The list of instructions. Supports NLP queries (recipeStr)

**getIngredientsFromText**(instructions: string[], returnUnitKey?: boolean )

Note : set returnUnitKey to true when you want the unit key matched instead of value matched (FR)
Ex: 70 grammes de chocolat

```json
result : {
  "ingredient": "chocolat",
  "unit": "g",
  "amount": 70,
}
```

## License

UNLICENSED
