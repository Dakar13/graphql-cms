import post from '../post'
import { isFunction } from '../../../utils/is'

describe('#Query', () => {
  it('should have getPosts method', async () => {
    expect(isFunction(post.Query.getPosts)).toBe(true)
  })
})

describe('#Mutation', () => {
  it('should have addPost method', async () => {
    expect(isFunction(post.Mutation.addPost)).toBe(true)
  })
})
