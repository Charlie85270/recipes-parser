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


ws
  = " "
  / [\t]

preposition
  = "of"i
  / "and"i
  / " and "i
  / " - "i
  / "-"i
  / ", "i
  / ","i

article
  = 'an'i / 'a'i

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
  / $(integer space word_number)

word_number
  = 'one'i
  / 'two'i
  / 'three'i
  / 'four'i
  / 'five'i
  / 'six'i
  / 'seven'i
  / 'eight'i
  / 'nine'i
  / 'ten'i
  / 'eleven'i
  / 'twelve'i
  / 'thirteen'i
  / 'a'i
  / 'an'i
  / 'half'i
  / 'quarter'i
  / 'third'i

couple
  = $(article? ' '? 'couple'i)

few
  = $(article? ' '? 'few'i)

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
  = cup
  / fluid_ounce
  / glass
  / bottle
  / bowl
  / gallon
  / ounce
  / pint
  / pound
  / quart
  / tablespoon
  / teaspoon
 

cup
  = 'cups'i
  / 'cup'i
  / 'cps'i
  / 'cps.'i
  / 'c.'i
  / 'c'i

glass
  = 'glass'i
  / 'glas'i
  / 'gls'i

bowl
  = 'bowl'i
  / 'bowls'i
  / 'bwl'i

bottle
  = 'bottles'i
  / 'bottle'i
  / 'btl.'i
  / 'btl'i


fluid_ounce
  = fluid ws ounce

fluid
  = 'fluid'i
  / 'fl'i '.'?

gallon
  = 'gallons'i
  / 'gallon'i
  / 'gal.'i
  / 'gal'i

ounce
  = 'ounces'i
  / 'ounce'i
  / 'oz.'i
  / 'oz'i

pint
  = 'pints'i
  / 'pint'i
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

tablespoon
  = 'tablespoons'i
  / 'tablespoon'i
  / 'spoon'i
  / 'tbsp.'i
  / 'tbsp'i
  / 'tbs.'i
  / 'tbl.'i
  / 'tbs'i
  / 'tbl'i
  / 'T.'
  / 'T'

teaspoon
  = 'teaspoons'i
  / 'teaspoon'i
  / 'tsp.'i
  / 'tsp'i
  / 't.'
  / 't'

metric_unit
  = gram
  / kilogram
  / liter
  / centiliter
  / milligram
  / milliliter

gram
  = 'grams'i
  / 'gram'i
  / 'gr.'i
  / 'gr'i
  / 'g.'i
  / 'g'i

kilogram
  = 'kilograms'i
  / 'kilogram'i
  / 'kg.'i
  / 'kg'i

liter
  = 'liters'i
  / 'liter'i
  / 'l.'i
  / 'l'i

centiliter
  = 'centiliters'i
  / 'centiliter'i
  / 'cl.'i
  / 'cl'i

milligram
  = 'milligrams'i
  / 'milligram'i
  / 'mlg.'i
  / 'mlg'i
  / 'mg'i
   / 'mg.'i

milliliter
  = 'milliliters'i
  / 'milliliter'i
  / 'ml.'i
  / 'ml'i

imprecise_unit
  = dash
  / handful
  / pinch
  / touch
  / slice
  / packet
  / envelope
  / splash
  / sprig
  / sheet
  / bag

dash
  = 'dashes'i
  / 'dash'i

handful
  = 'handfuls'i
  / 'handful'i
  / 'hdful'i
  / 'hdfl'i
  / 'hdf'i
pinch
  = 'pinches'i
  / 'pinch'i
  / 'pinche'i
  / 'pch'i

touch
  = 'touches'i
  / 'touch'i
   / 'tch'i

slice
  = 'slices'i
  / 'slice'i

packet
  = 'packets'i
  / 'packet'i
  / 'pck'i

envelope
  = 'envelopes'i
  / 'envelope'i

splash
  = 'splashes'i
  / 'splash'i

sprig
  = 'sprigs'i
  / 'sprig'i

sheet
  = 'sheets'i
  / 'sheet'i

bag
  = 'bags'i
  / 'bag'i

dose
  = 'doses'i
  / 'dose'i