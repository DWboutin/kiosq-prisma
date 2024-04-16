import { z } from 'zod'

export const productSizesPricesCreationSchema = z.object({
  productId: z.number(),
  sizeId: z.number(),
  quantity: z.number().min(1).max(1000),
  price: z.number().multipleOf(0.01),
})
