const assign = (target: object, ...sources: object[]) => {
  sources.forEach((source) => {
    return Object.keys(source).forEach((key) => {
      target[key] = source[key]
    })
  })

  return target
}

export { assign }
