import { mergev1, mergev2 } from './merge'

describe('assign v1', () => {
  it('assigns one object to another', () => {
    const obj1 = { one: true }
    const obj2 = { two: true }

    expect(assignv1(obj1, obj2)).toEqual({ one: true, two: true })
  })

  it('mutates the target', () => {
    const obj1 = { one: true }
    const obj2 = { two: true }

    assignv1(obj1, obj2)

    expect(obj1).toEqual({ one: true, two: true })

    const obj3 = { three: true }
    const obj4 = { four: true }
    const obj5 = assignv1({}, obj3, obj4)

    expect(obj5).not.toBe(obj3)
    expect(obj5).not.toBe(obj4)
    expect(obj5).toEqual({ three: true, four: true })
  })
})

describe('assign v2', () => {
  it('assigns objects properties correctly', () => {
    const obj1 = { one: true }
    const obj2 = { two: true }

    expect(assignv2(obj1, obj2)).toEqual({ one: true, two: true })
  })

  it('mutates the target', () => {
    const obj1 = { one: true }
    const obj2 = { two: true }

    const obj3 = assignv2(obj1, obj2)

    expect(obj1).not.toEqual({ one: true, two: true })
    expect(obj3).toEqual({ one: true, two: true })
  })
})
