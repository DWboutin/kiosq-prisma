import { z } from 'zod'

const passwordRegexp = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&-_])[A-Za-z\d@$!%*?&-_]+$/

const passwordRegexpError =
  'Password should contain at least one letter, one number and one special character and have a minimum length of 12 characters'

const nameValidator = z
  .string()
  .min(2, { message: 'Minimum 2 characters' })
  .max(32, { message: 'Maximum 32 characters' })
const emailValidator = z.string().min(1, { message: 'No input' }).email('Invalid email')
const passwordValidator = z.string().min(12).max(32).regex(passwordRegexp, passwordRegexpError)

export const userCreationSchema = z.object({
  name: nameValidator,
  email: emailValidator,
  password: passwordValidator,
})
