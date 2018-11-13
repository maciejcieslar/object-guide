const isObject = (val: any) =>
  val !== null && typeof val === 'object' && !Array.isArray(val)

function mergeObject(target: object, source: object) {
  return Object.keys(source).reduce((result, key) => {
    const sourceValue = source[key]
    const targetValue = target[key]

    result[key] = mergeValues(targetValue, sourceValue)

    return result
  }, target)
}

function mergeArray(target: any[], source: any[]) {
  source.forEach((value, index) => {
    target[index] = value
  })

  return target
}

function mergeValues(target: any, source: any) {
  if (isObject(target) && isObject(source)) {
    return mergeObject(target, source)
  }

  if (Array.isArray(target) && Array.isArray(source)) {
    return mergeArray(target, source)
  }

  if (source === undefined) {
    return target
  }

  return source
}

const merge = (target: object, ...sources: object[]) => {
  return sources.reduce((result, source) => {
    return {
      ...mergeValues(target, source),
    }
  }, target)
}

export { merge }
