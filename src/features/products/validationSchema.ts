import { z } from 'zod'

const sizesAndPricesSchema = z
  .array(
    z.object({
      quantity: z.string().refine(
        (value) => {
          const numberValue = Number(value)
          return Number.isInteger(numberValue) && numberValue > 0 && numberValue <= 100
        },
        {
          message: 'Quantity must be between 1 and 100',
        },
      ),
      size: z.number().gt(0),
      price: z.string().refine(
        (value) => {
          const numberValue = Number(value)
          return numberValue > 0 && /^\d+(\.\d{1,2})?$/.test(value)
        },
        {
          message: 'Price must be a positive number with up to 2 decimal places',
        },
      ),
    }),
  )
  .min(1)

export const productCreationSchema = z
  .object({
    categoryId: z
      .number({
        required_error: 'Please select a category',
        invalid_type_error: 'Please select a category',
      })
      .gt(0, 'Please select a category'),
    typeId: z
      .number({
        required_error: 'Please select a type',
        invalid_type_error: 'Please select a type',
      })
      .gt(0, 'Please select a type'),
    varietyId: z
      .number({
        required_error: 'Please select a variety',
        invalid_type_error: 'Please select a variety',
      })
      .gt(0, 'Please select a variety'),
    startPeriod: z.enum(['start', 'end']),
    startMonth: z.number().int().min(0).max(11),
    endPeriod: z.enum(['start', 'end']),
    endMonth: z.number().int().min(0).max(11),
    sizesAndPrices: sizesAndPricesSchema,
  })
  .refine(
    (value) => {
      return !(value.startPeriod === value.endPeriod && value.startMonth === value.endMonth)
    },
    {
      message: 'Start period and month cannot be the same as end period and month',
      path: ['endPeriod'],
    },
  )
  .refine(
    (value) => {
      return !(value.startPeriod === value.endPeriod && value.startMonth === value.endMonth)
    },
    {
      message: 'Start period and month cannot be the same as end period and month',
      path: ['endMonth'],
    },
  )
  .refine(
    (value) => {
      return !(value.startPeriod === value.endPeriod && value.startMonth > value.endMonth)
    },
    {
      message: 'Start period and month should be before end period and month',
      path: ['endMonth'],
    },
  )
