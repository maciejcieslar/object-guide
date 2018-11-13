import { mergev1, mergev2 } from './merge'

type MergeFn = typeof mergev1 | typeof mergev2

const testMerge = (mergeFn: MergeFn) => {
  const obj1 = {
    prop1: {
      prop2: {
        prop3: [1, 2, 6],
        prop4: true,
        prop5: false,
        prop6: [{ abc: true, abcd: true }],
      },
    },
  }
  const obj2 = {
    prop1: {
      prop2: {
        prop3: [1, 2, undefined, 4, 5],
        prop4: false,
        prop6: [{ abc: false }],
      },
      prop7: true,
    },
  }

  expect(mergeFn({}, obj1, obj2)).toEqual({
    prop1: {
      prop2: {
        prop3: [1, 2, 6, 4, 5],
        prop4: false,
        prop5: false,
        prop6: [{ abc: false, abcd: true }],
      },
      prop7: true,
    },
  })
}

describe('merge v1 (recursively)', () => {
  it('it merges provided objects into one', () => {
    return testMerge(mergev1)
  })
})

describe('merge v2 (flatten props)', () => {
  it('it merges provided objects into one', () => {
    return testMerge(mergev2)
  })
})
