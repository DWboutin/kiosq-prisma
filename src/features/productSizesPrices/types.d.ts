type ProductSizePrice = Omit<'id', DbEntity> & ProductSizePriceData

type ProductSizePriceData = {
  quantity: number
  price: number
} & ProductSizeUniqueContraint

type ProductSizeUniqueContraint = {
  productId: number
  sizeId: number
}
