declare namespace NodeJS {
  export interface ProcessEnv {
    API_PORT: number
    DATABASE_URL: string
  }
}

interface IRepository {
  create: (data: any) => Promise<any>
  // findAll: () => Promise<any>
  // findById: (id: string) => Promise<any | null>
  // update: (id: string, data: any) => Promise<any>
  // delete: (id: string) => Promise<any>
}
