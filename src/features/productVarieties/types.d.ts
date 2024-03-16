type ProductVariety = DbEntity & ProductVarietyData

type ProductVarietyData = {
  name: string
  categoryId: number
  typeId: number
}
