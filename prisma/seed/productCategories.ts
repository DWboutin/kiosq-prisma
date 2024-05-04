export const productCategories = [
  'Fruit',
  'Vegetable',
  'Brewery',
  'Creamery',
  'Craftsmanship',
  'Fish and seafood',
  'Bakery',
  'Butchery',
  'Dairy',
  'Catering',
  'Beverage',
  'Other',
] as const
type ProductCategory = (typeof productCategories)[number]
