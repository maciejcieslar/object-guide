const assign = (target: object, ...sources: object[]) => {
  return sources.reduce((result, current) => {
    return {
      ...result,
      ...current,
    }
  }, target)
}

export { assign }
