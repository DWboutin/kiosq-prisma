type User = {
  id: string
  createdAt: Date
  updatedAt: Date
} & UserData

type UserData = {
  name: string
  email: string
  password: string
}
