type User = {
  id: number
  created_at: Date
  updated_at: Date
} & UserData

type UserData = {
  name: string
  email: string
  password: string
}
