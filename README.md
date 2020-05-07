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
  "totalFoodQuantity": 500
}
```

Example FR: 'une demie cuillère à soupe de riz'

```json
result : {
  "ingredient": "riz",
  "unit": "cuillereasoupe",
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

# Supported ingredient for totalFoodQuantity calcul approximation (FR and EN)

"liquide"
"farine"
"purée de pomme de terre"
"farine de pomme de terre"
"sucre"
"riz"
"sel fin"
"gros sel"
"beurre"
"poudre"
"bicarbonate de sodium"
"bicarbonate de soude"

# API

## Langage

To change lang just set process.env.lang to 'EN' or 'FR'. Default is 'FR'

## Returns the list of ingredients ,weights and units from a given list of instruction.

```
import RecipesParser from 'recipes-parser';
const parser = new RecipesParser();
const results = parser.getIngredientsFromText(['50 grammes de chocolat']);
```

\_@param instructions -- The list of instructions. Supports NLP queries (recipeStr)

**getIngredientsFromText**(instructions: string[], returnUnitKey?: boolean )

Note : set returnUnitKey to true when you want the unit key matched instead of value matched (FR)
Ex: 70 grammes de poulet

```json
result : {
  "ingredient": "poulet",
  "unit": "g",
  "amount": 70,
  "totalFoodQuantity": 70
}
```

# Supported units KEY returns (FR)

```json
coupe: ["coupes", "coupe", "cp.", "cp"],
  tasse: ["tasses", "tasse", "tass à café."],
  bol: ["bols", "bol", "bol à soupe."],
  bouteille: ["bouteilles", "bouteille", "btl.", "btl"],
  ounce: ["onces", "once", "oz.", "oz", "oc.", "oc"],
  pinte: ["pintes", "pinte", "pt.", "pt"],
  pound: ["pounds", "pound", "lbs.", "lbs", "lb.", "lb"],
  quart: ["quarts", "quart", "qts.", "qts", "qt.", "qt"],
  cuillereasoupe: [
    "cuilleres a soupe",
    "cuillère à soupe",
    "cuillères à soupe",
    "cuillere a soupe",
    "cas.",
    "c à s",
    "c a s",
    "c.à s.",
    "cuillere a soupe",
    "tbs.",
    "tbs",
    "T.",
    "T"
  ],
  cuillereacafe: [
    "cuilleres a cafe",
    "cuillere a cafe",
    "cuilleres a cafe",
    "cuillère à cafe",
    "cuillères à cafe",
    "cuillére à cafe",
    "cuilléres à cafe",
    "cuillere a cafe",
    "cuillère a cafe",
    "cuillères a cafe",
    "c.à c.",
    "cac.",
    "c à c",
    "c a c",
    "cac",
    "c"
  ],
  kg: ["kilogrammes", "kilogramme", "kilos", "kilo", "kg.", "kg"],
  g: ["grammes", "gramme", "gr.", "gr", "g.", "g"],
  l: ["littres", "littre", "lit.", "l.", "l"],
  dcl: ["decilittres", "decilittre", "dclit.", "dcl.", "dl"],
  cl: ["centilitres", "centilitre", "cl.", "cl"],
  mg: ["milligrammes", "milligramme", "mlg.", "mlg", "mg.", "mg"],
  ml: ["millilitres", "millilitre", "mlt", "ml.", "ml"],
  zeste: ["élan", "zeste", "mordant", "elan"],
  poignee: ["poignées", "poignée", "poignée", "poignee", "poignees", "poigne"],
  pincee: ["pincées", "pincée", "pincee", "pincees", "pince"],
  touche: ["touches", "touche"],
  tranche: ["tranches", "tranche"],
  paquet: ["paquets", "paquets"],
  enveloppe: ["enveloppes", "enveloppe"],
  eclat: [
    "éclaboussures",
    "eclaboussures",
    "éclats",
    "éclat",
    "eclat",
    "eclats"
  ],
  brin: ["brins", "brin"],
  feuille: ["feuilles", "feuille"],
  sachet: ["sachets", "sachet"],
  dose: ["doses", "dose"]
```

# Supported units (EN)

Not yet implemented

## License

UNLICENSED
