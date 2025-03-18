import { createQueryOptions } from './index'
import { queryOptions } from '@tanstack/react-query'

jest.mock('@tanstack/react-query', () => ({
  queryOptions: jest.fn()
}))

describe('createQueryOptions', () => {
  it('should create query options with the correct queryKey and queryFn', () => {
    const mockAsyncFn = jest.fn(async (params: string) => `Result for ${params}`)
    const queryKey = ['testKey']

    const wrappedQueryOptions = createQueryOptions(queryKey, mockAsyncFn)
    const params = 'testParam'
    wrappedQueryOptions(params)

    expect(queryOptions).toHaveBeenCalledWith({
      queryKey: [...queryKey, params],
      queryFn: expect.any(Function)
    })
    const queryFn = (queryOptions as jest.Mock).mock.calls[0][0].queryFn
    expect(queryFn()).resolves.toBe(`Result for ${params}`)
  })

  it('should create query options with the base queryKey when no params are provided', () => {
    const mockAsyncFn = jest.fn(async () => 'Result without params')
    const queryKey = ['testKey']

    const wrappedQueryOptions = createQueryOptions(queryKey, mockAsyncFn)
    wrappedQueryOptions()

    expect(queryOptions).toHaveBeenCalledWith({
      queryKey: queryKey,
      queryFn: expect.any(Function)
    })
    const queryFn = (queryOptions as jest.Mock).mock.calls[1][0].queryFn
    expect(queryFn()).resolves.toBe('Result without params')
  })
})
