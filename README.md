# recipes-parser.js

#### A library to parse recipes (string text entry) and exctract aliments, units and weights in EN and FR.

#

recipes-parser.js is a library to extract aliments, units and weights from a text phrase in. The library processing natural language strings and retrieving information from two langage (FR and EN)

Example EN: '1/2 kilogram of chicken'

```json
result : {
  "ingredient": "chicken",
  "unit": "kilogram",
  "amount": 0.5,
  "totalFoodQuantity": 500
}
```

Example FR: 'une demie cuillère à soupe de riz'

```json
result : {
  "ingredient": "riz",
  "unit": "cuillère à soupe",
  "amount": 0.5,
  "totalFoodQuantity": 6
}
```

Example FR: '70cl d'huile d'olive'

```json
result : {
  "ingredient": "huile d'olive",
  "unit": "cl",
  "amount": 70,
  "totalFoodQuantity": 700
}
```

nb : (totalFoodQuantity is in grams)

---

# API

## Returns the list of ingredients ,weights and units from a given list of instruction.

\_@param instructions -- The list of instructions. Supports NLP queries (recipeStr)

**getIngredientsFromText**(instructions: string[])

## License

UNLICENSED
