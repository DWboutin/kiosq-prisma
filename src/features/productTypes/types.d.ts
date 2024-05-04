type ProductType = DbEntity & ProductTypeData

type ProductTypeData = {
  name: string
  categoryId: number
}
