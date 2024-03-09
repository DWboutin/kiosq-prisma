export type FruitKeys = (typeof productTypes.Fruit)[number]
export type VegetableKeys = (typeof productTypes.Vegetable)[number]
export type BreweryKeys = (typeof productTypes.Brewery)[number]
export type CreameryKeys = (typeof productTypes.Creamery)[number]
export type CraftsmanshipKeys = (typeof productTypes.Craftsmanship)[number]
export type FishAndSeafoodKeys = (typeof productTypes)['Fish and seafood'][number]
export type BakeryKeys = (typeof productTypes.Bakery)[number]
export type ButcheryKeys = (typeof productTypes.Butchery)[number]
export type DairyKeys = (typeof productTypes.Dairy)[number]
export type CateringKeys = (typeof productTypes.Catering)[number]
export type BeverageKeys = (typeof productTypes.Beverage)[number]
export type OtherKeys = (typeof productTypes.Other)[number]

export const productTypes = {
  Fruit: ['Apple', 'Strawberry', 'Blueberry', 'Raspberry'] as const,
  Vegetable: ['Carrot', 'Potato', 'Onion', 'Garlic'] as const,
  Brewery: ['Beer', 'Wine', 'Cider'] as const,
  Creamery: ['Milk', 'Cheese', 'Yogurt'] as const,
  Craftsmanship: ['Soap', 'Candle', 'Pottery'] as const,
  'Fish and seafood': ['Salmon', 'Tuna', 'Shrimp'] as const,
  Bakery: ['Bread', 'Croissant', 'Baguette'] as const,
  Butchery: ['Beef', 'Pork', 'Chicken'] as const,
  Dairy: ['Milk', 'Cheese', 'Yogurt'] as const,
  Catering: ['Catering'] as const,
  Beverage: ['Soda', 'Juice', 'Water'] as const,
  Other: ['Other'] as const,
}
