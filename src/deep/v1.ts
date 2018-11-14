function deepObject<T>(source: T) {
  const result = {}

  Object.keys(source).forEach((key) => {
    const value = source[key]

    result[key] = deep(value)
  }, {})

  return result as T
}

function deepArray<T extends any[]>(collection: T) {
  return collection.map((value) => {
    return deep(value)
  }) as T
}

function deep<T>(value: T): T {
  if (typeof value !== 'object' || value === null) {
    return value
  }

  if (Array.isArray(value)) {
    return deepArray(value) as any
  }

  return deepObject(value) as any
}

export { deep }
