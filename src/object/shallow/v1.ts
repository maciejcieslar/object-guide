function shallow<T extends object>(target: T): T {
  return {
    ...(target as any),
  }
}

export { shallow }
