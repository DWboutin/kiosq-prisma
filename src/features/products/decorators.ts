import { ProductsRepository } from '/features/products/Repository'

export function CheckIfUserOwnsProduct(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  const originalMethod = descriptor.value

  descriptor.value = async function (...args: any[]) {
    const req = args[0]
    const res = args[1]
    const productId = parseInt(req.params.id)

    const authenticatedUser = req.user as User

    const productsRepository = new ProductsRepository()
    const userOwnProduct = await productsRepository.findByIdAndAuthorId(
      productId,
      authenticatedUser.id,
    )

    if (!userOwnProduct) {
      res.status(401).send('Unauthorized')
      return
    }

    return originalMethod.apply(this, args)
  }

  return descriptor
}
