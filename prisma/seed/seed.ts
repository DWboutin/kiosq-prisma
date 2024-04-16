import { PrismaClient } from '@prisma/client'
import { productCategories } from './productCategories'
import { productTypes } from './productTypes'
import { productVarieties } from './productVarieties'
import { productSizes } from './productSizes'

const prisma = new PrismaClient()

async function seed() {
  for (const productCategory of productCategories) {
    const category = await prisma.productCategory.create({
      data: {
        name: productCategory,
      },
    })

    const typesPromises = productTypes[productCategory].map(async (productType) => {
      const type = await prisma.productType.create({
        data: {
          name: productType,
          categoryId: category.id,
        },
      })

      // @ts-ignore
      if (productVarieties[productCategory][productType]) {
        // @ts-ignore
        const varitiesPromises = productVarieties[productCategory][productType].map(
          async (productVariety: string) => {
            await prisma.productVariety.create({
              data: {
                name: productVariety,
                categoryId: category.id,
                typeId: type.id,
              },
            })
          },
        )

        await Promise.all(varitiesPromises)
      }
    })

    await Promise.all(typesPromises)
  }

  for (const size of productSizes) {
    await prisma.productSize.create({
      data: {
        name: size,
      },
    })
  }
}

seed()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
