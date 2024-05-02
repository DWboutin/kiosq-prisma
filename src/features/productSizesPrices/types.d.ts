type ProductSizePrice = Omit<'id', DbEntity> & ProductSizePriceData

type ProductSizePriceData = {
  sizeId: number
  quantity: number
  price: number
}

type ProductSizePriceDataWithProductId = ProductSizePriceData & {
  productId: number
}

type ProductSizePriceUniqueContraint = {
  productId: number
  sizeId: number
}
