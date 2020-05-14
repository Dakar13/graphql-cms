import {
  encrypt,
  getBase64,
  setBase64
} from '../security'

describe('#encrypt', () => {
  it('Should return a encrypt salted string', () => {
    expect(encrypt('foo')).toBe('c9faa3b59cfa8d43e805e19182f4702d479014c8')
  })
})

describe('#getBase64', () => {
  it('Should get a value from base64 string', () => {
    expect(getBase64('Zm9v')).toBe('foo')
  })

  it('Should get a JSON from base64 string', () => {
    expect(getBase64('eyJmb28iOiJiYXIifQ==')).toEqual({ foo: 'bar' })
  })
})

describe('#setBase64', () => {
  it('Should set a string value to base64 string', () => {
    expect(setBase64('foo')).toBe('Zm9v')
  })

  it('Should set a JSON to base64 string', () => {
    expect(setBase64(JSON.stringify({ foo: 'bar' }))).toEqual('eyJmb28iOiJiYXIifQ==')
  })
})
