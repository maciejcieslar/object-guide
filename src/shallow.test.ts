import { shallowv1, shallowv2 } from './shallow'

describe('shallow v1 (spread operator)', () => {
  it('copies an object shallowly', () => {
    const obj1 = { prop1: true, prop2: { prop3: true } }

    const copiedObj1 = shallowv1(obj1)

    expect(copiedObj1).not.toBe(obj1)
    expect(copiedObj1.prop2).toBe(obj1.prop2)
    expect(copiedObj1).toEqual(obj1)
  })
})

describe('shallow v2 (copy props)', () => {
  it('copies an object shallowly', () => {
    const obj1 = { prop1: true, prop2: { prop3: true } }

    const copiedObj1 = shallowv2(obj1)

    expect(copiedObj1).not.toBe(obj1)
    expect(copiedObj1.prop2).toBe(obj1.prop2)
    expect(copiedObj1).toEqual(obj1)
  })
})
