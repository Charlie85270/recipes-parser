start
  = ingredient_full

ingredient_full
  = amount:amount? (ws+)? container:container? (ws+)?  unit:unit? (ws+)? imprecise_unit:imprecise_unit? (ws+)? preposition:preposition? (ws+)? ingredient:ingredient? [\n]? {
    var result = {
      amount: amount,
      container: container,
      ingredient: ingredient,
      unit: unit,
      imprecise_unit: imprecise_unit
    };

    for(var i in result) {
      if(result[i] === null || result[i] === undefined) {
        delete result[i];
      }
    }

    return result;
  }

amount
  = fraction
  / mixed_number
  / word_number
  / float
  / integer
  / few
  / couple

container
  = container_wrapper_start? (ws+)? amount:amount (ws+)? unit:unit (ws+)? container_wrapper_end? {
    return { amount: amount, unit: unit };
  }

container_wrapper_start
  = "(" / "{" / "[" / "<"

container_wrapper_end
  = ")" / "}" / "]" / ">"

ws
  = " "
  / [\t]

preposition
  = "de "i
  / "pour "i
  / "et "i
  / " en "i
  / "en"i
  / " et "i
  / " - "i
  / "-"i
  / ", "i
  / ","i
  

article
  = 'un'i / 'une'i / 'des'i

space
  = " "

ingredient
  = phrase

phrase
  = $(.+)

punctuation
  = [,]

word
  = letters:letter+ { return letters.join(''); }

float
  = $(integer? [.] integer)

mixed_number
  = $(integer preposition fraction)
  / $(integer space fraction)
  / $(integer unit fraction)

word_number
  = 'une demie'i
  /'un demi'i
  /'une'i
  / 'un'i
  / 'deux'i
  / 'trois'i
  / 'quatre'i
  / 'cinq'i
  / 'six'i
  / 'sept'i
  / 'huit'i
  / 'neuf'i
  / 'dix'i
  / 'onze'i
  / 'douze'i
  / 'treize'i
  / 'une'i
  / 'des'i

couple
  = $(article? " "? "couple"i)
  / $(article? " "? "paire"i)

few
  = $(article? ' '? 'peu'i)

fraction
  = $(integer [/] integer)

integer
  = digits:[0-9]+ { return digits.join(''); }

letter
  = [a-zA-Z]

unit
  = $(generic !letter)
  / $(metric_unit !letter)
  / $(imprecise_unit !letter)

generic
  = coupe
  / bouteille
  / tasse
  / bol
  / gallon
  / ounce
  / pinte
  / pound
  / quart
  / cuillereasoupe
  / cuillereacafe

coupe
  = 'coupes'i
  / 'coupe'i
  / 'cp.'i
  / 'cp'i

tasse
  = 'tasses'i
  / 'tasse'i
  / 'tass à café.'i

bol
  = 'bols'i
  / 'bol'i
  / 'bol à soupe.'i


bouteille
  = 'bouteilles'i
  / 'bouteille'i
  / 'btl.'i
  / 'btl'i


fluid_ounce
  = fluid ws ounce

fluid
  = 'fluide'i
  / 'fl'i '.'?

gallon
  = 'gallons'i
  / 'gallon'i
  / 'gal.'i
  / 'gal'i

ounce
  = 'onces'i
  / 'once'i
  / 'oz.'i
  / 'oz'i
  / 'oc.'i
  / 'oc'i


pinte
  = 'pintes'i
  / 'pinte'i
  / 'pt.'i
  / 'pt'i


pound
  = 'pounds'i
  / 'pound'i
  / 'lbs.'i
  / 'lbs'i
  / 'lb.'i
  / 'lb'i

quart
  = 'quarts'i
  / 'quart'i
  / 'qts.'i
  / 'qts'i
  / 'qt.'i
  / 'qt'i

cuillereasoupe
  = 'cuilleres a soupe'i
  /'cuillere a soupe'i
  / 'cas.'i
  /'cuillere a soupe'i
  / 'tbs.'i
  / 'tbs'i
  / 'T.'
  / 'T'

cuillereacafe
  = 'cuilleres a cafe'i
  / 'cuillere a cafe'i
  / 'cuillere a cafe'i
  / 'cuillère a cafe'i
  / 'cac.'
  / 'cac'
  / 'c'

metric_unit
  = kilogramme
  /  gramme
  / litre
  / centilitre
  / milligramme
  / decilitre
  / millilitre

kilogramme
  = 'kilogrammes'i
  / 'kilogramme'i
  / 'kilos'i
  / 'kilo'i
  / 'kg.'i
  / 'kg'i

gramme
  = 'grammes'i
  / 'gramme'i
  / 'gr.'i
  / 'gr'i
  / 'g.'i
  / 'g'i



litre
  = 'littres'i
  / 'littre'i
  / 'lit.'i
  / 'l.'i
  / 'l'i


decilitre
  = 'decilittres'i
  / 'decilittre'i
  / 'dclit.'i
  / 'dcl.'i
  / 'dl'i

centilitre
  = 'centilitres'i
  / 'centilitre'i
  / 'cl.'i
  / 'cl'i

milligramme
  = 'milligrammes'i
  / 'milligramme'i
  / 'mlg.'i
  / 'mlg'i
  / 'mg.'i
  / 'mg'i

millilitre
  = 'millilitres'i
  / 'millilitre'i
  / 'mlt'i
  / 'ml.'i
  / 'ml'i

imprecise_unit
  = zeste
  / poignee
  / pincee
  / touche
  / tranche
  / paquet
  / enveloppe
  / eclat
  / brin
  / feuille
 

zeste
  = 'élan'i
  / 'zeste'i
  / 'mordant'i

poignee
  = 'poignées'i
  / 'poignée'i

pincee
  = 'pincées'i
  / 'pincée'i

touche
  = 'touches'i
  / 'touche'i

tranche
  = 'tranches'i
  / 'tranche'i

paquet
  = 'paquets'i
  / 'paquets'i

enveloppe
  = 'enveloppes'i
  / 'enveloppe'i

eclat
  = 'éclaboussures'i
  / 'eclaboussures'i
  / 'éclats'i
  / 'éclat'i

brin
  = 'brins'i
  / 'brin'i

feuille
  = 'feuilles'i
  / 'feuille'i


