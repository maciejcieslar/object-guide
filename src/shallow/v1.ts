function shallow<T extends object>(source: T): T {
  return {
    ...(source as any),
  }
}

export { shallow }
