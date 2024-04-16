declare namespace NodeJS {
  export interface ProcessEnv {
    API_PORT: number
    DATABASE_URL: string
  }
}

interface IRepository {
  create: (data: any) => Promise<any>
  findAll: () => Promise<any>
  findById: (id: any) => Promise<any | null>
  update: (id: any, data: any) => Promise<any>
  delete: (id: any) => Promise<any>
}

interface IRepositoryWithMultiplePrimaryKeys {
  create: (data: any) => Promise<any>
  findAll: () => Promise<any>
  findUnique: (obj: ProductSizeUniqueContraint) => Promise<any | null>
  update: (data: any) => Promise<any>
  delete: (obj: ProductSizeUniqueContraint) => Promise<any>
}

type DbEntity = {
  id: string
  createdAt: Date
  updatedAt: Date
}
