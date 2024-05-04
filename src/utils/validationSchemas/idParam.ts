import { z } from 'zod'

export const idParams = z.object({
  id: z.string().refine((value) => !isNaN(Number(value)), {
    message: 'Expected a string that can be converted to a number',
  }),
})
