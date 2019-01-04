function shallow<T extends object>(source: T): T {
  const copy = {} as T

  Object.keys(source).forEach((key) => {
    copy[key] = source[key]
  })

  return copy
}

export { shallow }
