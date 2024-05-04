type User = DbEntity & UserData

type UserData = {
  name: string
  email: string
  password: string
}
