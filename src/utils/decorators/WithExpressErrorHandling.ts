export function WithExpressErrorHandling(
  target: Object,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<any>,
) {
  const originalMethod = descriptor.value

  descriptor.value = async function (...args: any[]) {
    try {
      await originalMethod.apply(this, args)
    } catch (error) {
      const next = args[args.length - 1]
      if (typeof next === 'function') {
        next(error)
      }
    }
  }

  return descriptor
}
