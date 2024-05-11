type Product = DbEntity & ProductData

type ProductData = {
  name: string
  categoryId: number
  typeId: number
  varietyId: number
  startPeriod: string
  startMonth: number
  endPeriod: string
  endMonth: number
  authorId: string
}

type ProductDataWithSizesAndPrices = Product & { sizesAndPrices: ProductSizePriceData[] }
