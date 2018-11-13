function deepObject<T>(target: T) {
  return Object.keys(target).reduce((result, key) => {
    const value = target[key]

    return {
      ...result,
      [key]: deep(value),
    }
  }, {}) as T
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
