declare namespace NodeJS {
  export interface ProcessEnv {
    API_PORT: number
    DATABASE_URL: string
  }
}

interface IRepository {
  create: (data: any) => Promise<any>
  findAll: () => Promise<any>
  findById: (id: number) => Promise<any | null>
  update: (id: number, data: any) => Promise<any>
  delete: (id: number) => Promise<any>
}
