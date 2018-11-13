function shallow<T extends object>(source: T): T {
  const copy = {}

  Object.keys(source).forEach((key) => {
    copy[key] = source[key]
  })

  return copy as any
}

export { shallow }
