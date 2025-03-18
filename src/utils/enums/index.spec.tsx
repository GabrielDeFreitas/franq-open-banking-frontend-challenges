import { RoutesUrls } from './routes-url'

describe('RoutesUrls', () => {
  it('should have the correct keys and values', () => {
    expect(RoutesUrls.BASE_URL).toBe('/')
    expect(RoutesUrls.LOGIN).toBe('/login')
    expect(RoutesUrls.REGISTER).toBe('/register')
    expect(RoutesUrls.FINANCE).toBe('/finance')
    expect(RoutesUrls.GITHUB).toBe('https://github.com/GabrielDeFreitas/franq-open-banking-frontend-challenges')
  })

  it('should only allow valid values for RoutesUrls type', () => {
    const validUrl: RoutesUrls = RoutesUrls.LOGIN
    expect(validUrl).toBe('/login')
  })
})
