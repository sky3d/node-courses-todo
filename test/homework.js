const { expect } = require('chai')
const { sum } = require('./helpers')

describe('Lesson 3.3', () => {
  it('plus', () => {
    expect(sum(1, 4)).to.equal(5)
  })
})
