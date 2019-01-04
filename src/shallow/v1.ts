function shallow<T extends object>(source: T): T {
  return {
    ...source,
  }
}

export { shallow }
