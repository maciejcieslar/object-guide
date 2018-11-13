function shallow<T extends object>(target: T): T {
  return Object.keys(target).reduce((result, key) => {
    return {
      ...result,
      [key]: target[key],
    }
  }, {}) as any
}

export { shallow }
