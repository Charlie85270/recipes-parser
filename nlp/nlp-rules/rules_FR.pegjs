start
  = ingredient_full

ingredient_full
  = amount:amount? (ws+)?  unit:unit? (ws+)? imprecise_unit:imprecise_unit? (ws+)? preposition:preposition? (ws+)? ingredient:ingredient? [\n]? {
    var result = {
      amount: amount,
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
  / ecart


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
  / $(integer preposition integer)
  / $(integer space fraction)
  / $(integer unit fraction)
  / $(integer space word_number)

word_number
  = 'une demie'i
  /'un demi'i
  /'un tier'i
  /'demi'i
  /'tier'i
  /'quart'i
  /'moitiées'i
  /'moitié'i
  /'moitiée'i
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

ecart 
 = $(integer? " "? "a" integer?)
  / $(integer? " "? "à" integer?)

few
  = $(article? ' '? 'peu'i)

fraction
  = $(integer [/] integer)

multiplication
  = $(integer word_number)

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
  = 'coupes'
  / 'coupe'
  / 'cp.'
  / 'cp'

tasse
  = 'tasses'i
  / 'tasse'i
  / 'tass à café.'i

bol
  = 'bols'i
  / 'bol'i
  / 'bol à soupe.'i


bouteille
  = 'bouteilles'
  / 'bouteille'
  / 'btl.'
  / 'btl'


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
  / 'cuillère à soupe'i
  / 'cuillères à soupe'i
  / 'c. à soupe'i
  / 'c. a soupe'i
  / 'c.à soupe'i
  / 'c.a soupe'i
  /'c. à soupe'i
  /'c a soupe'i
  /'c. a soupe'i
  /'c. à soupe'i
  /'c a soupe'i
  /' ca soupe'i
  / 'c. à s.'i
  /'c.à s.'i
  / 'cas.'i
  / 'c à s'i
  / 'c a s'i
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
  / 'cuillères à cafe'i
  / 'cuillére à cafe'i
  / 'cuillère à cafe'i
  / 'c. à café'i
  / 'c. a café'i
  / 'c.à café'i
  / 'c.a café'i
  / 'c. à c.'i
  / 'c.a cafe'i
  / 'c.à café'i
  /'c. à cafe'i
  /'c a cafe'i
  /'c. a café'i
  /'c. a café'i
  /'c a café'i
  /'c a cafe'i
  /'c.à c.'i
  /'c.à c'i
  /'c.a c'i
  / 'c.à café'i
  /'c.a café'i
  /'c.à cafe'i
  /'c.a cafe'i
  / 'c à c'i
  / 'c a c'i
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
  / sachet
  / dose
 
 sachet
  = 'sachet'i
  / 'sachets'i
  
zeste
  = 'élan'i
  / 'zeste'i
  / 'mordant'i

poignee
  = 'poignées'i
  / 'poignée'i
  / 'poignee'i
  / 'poignees'i
  / 'poigne'i
pincee
  = 'pincées'i
  / 'pincée'i
  / 'pincee'i
  / 'pincees'i
  / 'pince'i

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

dose
  = 'doses'i
  / 'dose'i

feuille
  = 'feuilles'i
  / 'feuille'i


