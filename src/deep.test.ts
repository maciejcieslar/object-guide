import { deepv1, deepv2 } from './deep'

type DeepFn = typeof deepv1 | typeof deepv2

const testDeep = (deepFn: DeepFn) => {
  const obj1 = { one: true }

  expect(deepFn(obj1)).not.toBe(obj1)

  const obj2 = {
    prop1: {
      prop2: {
        prop3: {
          prop: true,
        },
        prop4: [1, 2, 3, 4, 5],
      },
    },
  }

  const copiedObj2 = deepFn(obj2)

  expect(copiedObj2).not.toBe(obj2)
  expect(copiedObj2.prop1.prop2.prop4).not.toBe(obj2.prop1.prop2.prop4)
  expect(copiedObj2).toEqual(obj2)
}

describe('deep v1 (resursively)', () => {
  it('copies an object completely', () => {
    return testDeep(deepv1)
  })
})

describe('deep v2 (JSON.parse/JSON.stringify)', () => {
  it('copies an object completely', () => {
    return testDeep(deepv2)
  })
})
