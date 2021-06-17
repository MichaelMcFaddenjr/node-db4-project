const db = require('../../data/db-config')
const Hobbit = require('./recipes-model')

test('sanity', () => {
  expect(process.env.DB_ENV).toBe('testing')
})