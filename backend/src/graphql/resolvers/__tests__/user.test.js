import user from '../user'
import { isFunction } from '../../../utils/is'

describe('#Query', () => {
  it('Should have getUsers method', async () => {
    expect(isFunction(user.Query.getUsers)).toBe(true)
  })
})

describe('#Mutation', () => {
  it('Should have addUser method', async () => {
    expect(isFunction(user.Mutation.addUser)).toBe(true)
  })
  it('Should have login method', async () => {
    expect(isFunction(user.Mutation.login)).toBe(true)
  })
})
