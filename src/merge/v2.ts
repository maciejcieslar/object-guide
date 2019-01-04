function setAtPath(target: object, path: (string | number)[], value: any): any {
  return path.reduce((result, key, index) => {
    if (index === path.length - 1) {
      result[key] = value
      return target
    }

    if (!result[key]) {
      const nextKey = path[index + 1]

      result[key] = typeof nextKey === 'number' ? [] : {}
    }

    return result[key]
  }, target)
}

function flatten(collection: any[]) {
  return collection.reduce((result, current) => {
    let value = current

    if (Array.isArray(current)) {
      value = flatten(current)
    }

    return result.concat(value)
  }, [])
}

function getValue(value: any, path: (number | string)[] = []) {
  if (value === null || typeof value !== 'object') {
    return {
      value,
      path: [...path],
    }
  }

  if (Array.isArray(value)) {
    return getArrayValues(value, path)
  }

  return getObjectValues(value, path)
}

function getArrayValues(collection: any[], path: (number | string)[] = []) {
  return collection.map((value, index) => {
    return getValue(value, [...path, index])
  })
}

function getObjectValues(source: object, path: (number | string)[] = []) {
  return Object.keys(source).map((key) => {
    const value = source[key]

    return getValue(value, [...path, key])
  })
}

function merge(target: object, ...sources: object[]) {
  return flatten(
    sources.map((source) => {
      return getValue(source)
    }),
  ).reduce((result, { path, value }) => {
    if (value === undefined) {
      return result
    }

    return setAtPath(result, path, value)
  }, target)
}

export { merge }
