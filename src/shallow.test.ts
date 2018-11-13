import { shallowv1, shallowv2 } from './shallow'

type ShallowFn = typeof shallowv1 | typeof shallowv2

const testShallow = (shallowFn: ShallowFn) => {
  const obj1 = { prop1: true, prop2: { prop3: true } }

  const copiedObj1 = shallowFn(obj1)

  expect(copiedObj1).not.toBe(obj1)
  expect(copiedObj1.prop2).toBe(obj1.prop2)
  expect(copiedObj1).toEqual(obj1)
}

describe('shallow v1 (spread operator)', () => {
  it('copies an object shallowly', () => {
    return testShallow(shallowv1)
  })
})

describe('shallow v2 (copy props)', () => {
  it('copies an object shallowly', () => {
    return testShallow(shallowv2)
  })
})
