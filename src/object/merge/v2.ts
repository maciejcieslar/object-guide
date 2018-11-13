/**
 * @description Sets the given value at the path in the target object.
 * @param {object} target
 * @param {((string | number)[])} path
 * @param {*} value
 * @returns {object}
 */
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

function getFromPath(target: object, path: (string | number)[]) {
  return path.reduce((result, key) => {
    return result[key] || {}
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

const getFlattenedValue = (
  path: (number | string)[] = [],
  value: any = null,
) => {
  if (value === null || typeof value !== 'object') {
    return {
      value,
      path: [...path],
    }
  }

  if (Array.isArray(value)) {
    return flattenArrayKeys(path, value)
  }

  return flattenObjectKeys(path, value)
}

function flattenArrayKeys(path: (number | string)[], collection: any[]) {
  return collection.map((value, index) => {
    return getFlattenedValue([...path, index], value)
  })
}

function flattenObjectKeys(path: (number | string)[], source: object) {
  return Object.keys(source).map((key) => {
    const value = source[key]

    return getFlattenedValue([...path, key], value)
  })
}

function merge(target: object, ...sources: object[]) {
  return flatten(
    sources.map((source) => {
      return flattenObjectKeys([], source)
    }),
  ).reduce((result, { path, value }) => {
    return setAtPath(result, path, value)
  }, target)
}

export { merge }
