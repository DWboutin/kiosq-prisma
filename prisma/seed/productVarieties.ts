import {
  BakeryKeys,
  BeverageKeys,
  BreweryKeys,
  ButcheryKeys,
  CateringKeys,
  CraftsmanshipKeys,
  CreameryKeys,
  DairyKeys,
  FishAndSeafoodKeys,
  FruitKeys,
  OtherKeys,
  VegetableKeys,
} from './productTypes'

type ProductVarieties = {
  Fruit: Record<FruitKeys, string[]>
  Vegetable: Record<VegetableKeys, string[]>
  Brewery: Record<BreweryKeys, string[]>
  Creamery: Record<CreameryKeys, string[]>
  Craftsmanship: Record<CraftsmanshipKeys, string[]>
  'Fish and seafood': Record<FishAndSeafoodKeys, string[]>
  Bakery: Record<BakeryKeys, string[]>
  Butchery: Record<ButcheryKeys, string[]>
  Dairy: Record<DairyKeys, string[]>
  Catering: Record<CateringKeys, string[]>
  Beverage: Record<BeverageKeys, string[]>
  Other: Record<OtherKeys, string[]>
}

const Fruit: ProductVarieties['Fruit'] = {
  Apple: [
    'McIntosh',
    'Red Delicious',
    'Golden Delicious',
    'Granny Smith',
    'Gala',
    'Honeycrisp',
    'Fuji',
    'Ambrosia',
    'Pink Lady',
    'Empire',
  ] as const,
  Strawberry: [
    'Seascape',
    'Jewel',
    'Albion',
    'Chandler',
    'Tristar',
    'Earliglow',
    'Honeoye',
    'Allstar',
    'Sparkle',
    'Tribute',
  ] as const,
  Blueberry: [
    'Bluecrop',
    'Duke',
    'Elliot',
    'Patriot',
    'Jersey',
    'Legacy',
    'Chandler',
    'Brigitta',
    'Northland',
    'Northblue',
  ] as const,
  Raspberry: [
    'Heritage',
    'Nova',
    'Killarney',
    'Prelude',
    'Tulameen',
    'Boyne',
    'Joan J',
    'Autumn Bliss',
    'Caroline',
    'Encore',
  ] as const,
}
const Vegetable: ProductVarieties['Vegetable'] = {
  Carrot: ['Nantes', 'Imperator', 'Chantenay', 'Danvers', 'Thumbelina'] as const,
  Potato: ['Russet Burbank', 'Yukon Gold', 'Red Pontiac', 'Kennebec', 'Purple Majesty'] as const,
  Onion: ['Yellow Sweet Spanish', 'Red Creole', 'Vidalia', 'Walla Walla', 'Texas 1015'] as const,
  Garlic: ['Hardneck', 'Softneck', 'Elephant', 'Purple Stripe', 'Rocambole'] as const,
}
const Brewery: ProductVarieties['Brewery'] = {
  Beer: ['IPA', 'Lager', 'Stout', 'Wheat', 'Pale Ale'] as const,
  Wine: ['Merlot', 'Chardonnay', 'Pinot Noir', 'Riesling', 'Cabernet Sauvignon'] as const,
  Cider: ['Apple', 'Pear', 'Mixed Berry', 'Peach', 'Strawberry'] as const,
}
const Creamery: ProductVarieties['Creamery'] = {
  Milk: ['2%', '1%', 'Skim', 'Whole'] as const,
  Cheese: ['Cheddar', 'Mozzarella', 'Swiss', 'Brie', 'Parmesan'] as const,
  Yogurt: ['Greek', 'Vanilla', 'Strawberry', 'Blueberry', 'Plain'] as const,
}
const Craftsmanship: ProductVarieties['Craftsmanship'] = {
  Soap: ['Lavender', 'Eucalyptus', 'Citrus', 'Rose', 'Vanilla'] as const,
  Candle: ['Vanilla Bean', 'Fresh Linen', 'Sandalwood', 'Citrus Burst', 'Coconut'] as const,
  Pottery: ['Mug', 'Bowl', 'Plate', 'Vase', 'Sculpture'] as const,
}
const FishAndSeafood: ProductVarieties['Fish and seafood'] = {
  Salmon: ['Atlantic', 'Chinook', 'Coho', 'Sockeye', 'Pink'] as const,
  Tuna: ['Bluefin', 'Yellowfin', 'Bigeye', 'Albacore', 'Skipjack'] as const,
  Shrimp: ['Whiteleg', 'Black Tiger', 'Pink', 'Brown', 'Royal Red'] as const,
}
const Bakery: ProductVarieties['Bakery'] = {
  Bread: ['Sourdough', 'Whole Wheat', 'Multigrain', 'Rye', 'White'] as const,
  Croissant: ['Butter', 'Almond', 'Chocolate', 'Ham and Cheese', 'Spinach and Feta'] as const,
  Baguette: ['Classic', 'Whole Wheat', 'Multigrain', 'Rye', 'Olive'] as const,
}
const Butchery: ProductVarieties['Butchery'] = {
  Beef: ['Ribeye', 'Filet Mignon', 'New York Strip', 'T-Bone', 'Sirloin'] as const,
  Pork: ['Bacon', 'Pork Chops', 'Pork Tenderloin', 'Pork Belly', 'Pork Ribs'] as const,
  Chicken: ['Breast', 'Thigh', 'Wing', 'Drumstick', 'Whole'] as const,
}
const Dairy: ProductVarieties['Dairy'] = {
  Milk: ['2%', '1%', 'Skim', 'Whole'] as const,
  Cheese: ['Cheddar', 'Mozzarella', 'Swiss', 'Brie', 'Parmesan'] as const,
  Yogurt: ['Greek', 'Vanilla', 'Strawberry', 'Blueberry', 'Plain'] as const,
}
const Catering: ProductVarieties['Catering'] = {
  Catering: ['Catering'] as const,
}
const Beverage: ProductVarieties['Beverage'] = {
  Soda: ['Cola', 'Root Beer', 'Lemon-Lime', 'Orange', 'Ginger Ale'] as const,
  Juice: ['Apple', 'Orange', 'Grape', 'Cranberry', 'Pineapple'] as const,
  Water: ['Still', 'Sparkling', 'Flavored', 'Alkaline', 'Spring'] as const,
}
const Other: ProductVarieties['Other'] = {
  Other: ['Other'] as const,
}

export const productVarieties: ProductVarieties = {
  Fruit,
  Vegetable,
  Brewery,
  Creamery,
  Craftsmanship,
  ['Fish and seafood']: FishAndSeafood,
  Bakery,
  Butchery,
  Dairy,
  Catering,
  Beverage,
  Other,
}
