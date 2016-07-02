const {deepEqual} = require('assert')
const {range} = require('..')

describe('range', () => {
  it('returns a range array of the given size', () => {
    deepEqual(range(0, 0), [])
    deepEqual(range(0, 3), [0, 1, 2])
  })
})
