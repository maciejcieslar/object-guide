import { deepv1, deepv2 } from './deep'

describe('deep v1', () => {
  it('copies an object completely (resursively)', () => {
    const obj1 = { one: true }

    expect(deepv1(obj1)).not.toBe(obj1)

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

    const copiedObj2 = deepv1(obj2)

    expect(copiedObj2).not.toBe(obj2)
    expect(copiedObj2.prop1.prop2.prop4).not.toBe(obj2.prop1.prop2.prop4)
    expect(copiedObj2).toEqual(obj2)
  })
})

describe('deep v2', () => {
  it('copies an object completely (JSON.parse/JSON.stringify)', () => {
    const obj1 = { one: true }

    expect(deepv2(obj1)).not.toBe(obj1)

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

    const copiedObj2 = deepv2(obj2)

    expect(copiedObj2).not.toBe(obj2)
    expect(copiedObj2.prop1.prop2.prop4).not.toBe(obj2.prop1.prop2.prop4)
    expect(copiedObj2).toEqual(obj2)
  })
})
