const assign = (...sources: object[]) => {
  return sources.reduce((result, current) => {
    return {
      ...result,
      ...current,
    }
  }, {})
}

export { assign }
