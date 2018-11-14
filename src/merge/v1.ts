const isObject = (val: any) =>
  val !== null && typeof val === 'object' && !Array.isArray(val)

function mergeObject(target: object, source: object) {
  Object.keys(source).forEach((key) => {
    const sourceValue = source[key]
    const targetValue = target[key]

    target[key] = mergeValues(targetValue, sourceValue)
  })

  return target
}

function mergeArray(target: any[], source: any[]) {
  source.forEach((value, index) => {
    target[index] = mergeValues(target[index], value)
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
  sources.forEach((source) => {
    return mergeValues(target, source)
  })

  return target
}

export { merge }
